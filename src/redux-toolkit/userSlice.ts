import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { getUserById, updateUser } from '../services/user-controller';
import { IUser } from '../types/user';
import { IStore } from './store';

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => {
  const response = await getUserById(id);
  return response;
});

const updateStatus = createAsyncThunk('user/updateStatus', async (status: string, thunkApi) => {
  const { user } = thunkApi.getState() as IStore;
  const newUser = { ...user.data, status, roleName: undefined };
  const response = await updateUser(newUser);
  return response;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload, loading: false }),
    setError: (state, action) => ({ ...state, error: action.payload, loading: false }),
    setLoading: (state) => ({ ...state, loading: true }),
  },
  extraReducers: {
    [loadUser.pending.type]: (state) => ({ ...state, loading: true }),
    [loadUser.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [updateStatus.pending.type]: (state) => ({ ...state, loading: true }),
    [updateStatus.fulfilled.type]: (state, action) => {
      if (state?.data) {
        return state;
      }
      /*
      Пробовал заставить prettier и eslint игнорировать строчки ниже,
      прописывать изменение через Object.assign, но линтеры просто переправляют
      все обратно на spread. Если есть идеи, как обрубить руки линтерам тут, то хорошо бы
      уменьшить количество кода тут. А пока вот так.
      */
      const stateClone = cloneDeep(state) as { data: IUser | null};
      const newUser: IUser | null = { ...stateClone?.data as IUser, status: action.payload };
      return { ...state, data: newUser };
    },
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const {
  setData, setError, setLoading,
} = userSlice.actions;
export { loadUser, updateStatus };
export const userReducer = userSlice.reducer;
