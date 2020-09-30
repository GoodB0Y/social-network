import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userController from '../services/user-controller';
import { IUser } from '../types/user';

const loadFrendsList = createAsyncThunk('frendList/loadFrendsList', async (id: number) => {
  const response = await userController.getFriendsByUserId(id);
  response.map((i) => i.friendId + i.id);
  const temp: any = [];

  response.forEach(async (item) => {
    temp.push(userController.getUserById(item.friendId));
  });

  return temp;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
  frendsFilter: '',
};

const frendsListSlice = createSlice({
  name: 'frendList',
  initialState,
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload, loading: false }),
    setError: (state, action) => ({ ...state, error: action.payload, loading: false }),
    setFrendFilter: (state, action) => ({ ...state, frendsFilter: action.payload }),
    setLoading: (state) => ({ ...state, loading: true }),
  },
  extraReducers: {
    [loadFrendsList.pending.type]: (state) => ({ ...state, loading: true }),
    [loadFrendsList.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadFrendsList.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { setData, setError, setLoading, setFrendFilter } = frendsListSlice.actions;
export { loadFrendsList };
export const frendsReducer = frendsListSlice.reducer;
