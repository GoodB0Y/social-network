import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IUser } from '../types/user';
import { PostsState } from './postsSlice';
import { StateChat } from './chatSlice';
import { setData } from './userSlice';
import { getAuthUser, updateUser, updateUserStatus } from '../services/user-controller';

// const loadCurrentUser = createAsyncThunk('user/getCurrUser', async () => {
//   const response = await getAsyncCurrentUser();
//   return response;
// });

const loadCurrentUser = createAsyncThunk('user/getCurrUser', async () => getAuthUser());

interface UserState {
  data: null | IUser; // Пользователь, от имени которого произведен логин
  loading: boolean;
  error: null | Error;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

/*
Нужен, чтобы обращаться в createAsyncThunk к thunkApi.
Так как импортировать уже существующий тип стора не выйдет - создание стора зависит от
этого файла, - то приходится делать слепок ещё несуществующего стора.
Если через thunkApi надо будет обратиться куда-то в пределах данного файла -
модифицируете модель ниже.
*/
type CloneRootState = {
  user: UserState;
  currentUser: UserState;
  posts: PostsState;
  allAudiosReducer: {
    allAudios: never[];
    friends: never[];
    loading: string;
    msgFetchState: string;
  };
  chat: StateChat;
};

/*
 !! Старый код, работающий с updateUser()
 !! Может пригодиться для модификации

const updateStatus = createAsyncThunk<AxiosResponse<IUser>, string, {state:CloneRootState }>(
  'shownUser/updateStatus',
  async (status: string, thunkApi) => {
    const { currentUser } = thunkApi.getState();
    const newUser = {
      ...currentUser.data,
      status,
      roleName: undefined,
      activeName: 'Active',
    } as IUser;
    const response = await updateUser(newUser);
    return response;
  },
);
*/

const updateStatus = createAsyncThunk<AxiosResponse<IUser>, string, { state: CloneRootState }>(
  'currentUser/updateStatus',
  async (status: string, thunkApi) => {
    const currentUserId = thunkApi.getState().currentUser.data?.userId;
    if (!currentUserId) {
      return thunkApi.rejectWithValue('Error, no userId');
    }
    const response = await updateUserStatus({ userId: currentUserId, status });
    const userId = thunkApi.getState().currentUser.data?.userId;
    if (currentUserId === userId) {
      thunkApi.dispatch(setData(response));
    }
    return response;
  }
);

const updateAvatar = createAsyncThunk<AxiosResponse<IUser>, string, { state: CloneRootState }>(
  'currentUser/updateAvatar',
  async (avatarUrl: string, thunkApi) => {
    const { currentUser } = thunkApi.getState();
    const newUser = {
      ...currentUser.data,
      avatar: avatarUrl,
    } as IUser;
    const response = await updateUser(newUser);
    const userId = thunkApi.getState().user.data?.userId;
    if (currentUser.data?.userId === userId) {
      thunkApi.dispatch(setData(response));
    }
    return response;
  }
);

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    /* LOGOUT */
    removeCurrentUser: (state: UserState) => {
      state.data = null;
      return state;
    },
  },
  extraReducers: {
    /*
    UPDATE STATUS
      Изменяет статус юзера, из под которого пользователь залогинин, то есть currentUser.
    */
    [updateStatus.pending.type]: (state) => ({ ...state, loading: true }),
    [updateStatus.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    /*
      !!
      Старый код, если updateStatus заставить работать на updateUserStatus
      Удалить, если слишком мешается
      !!

      if (state?.data) {
        return state;
      }

      Пробовал заставить prettier и eslint игнорировать строчки ниже,
      прописывать изменение через Object.assign, но линтеры просто переправляют
      все обратно на spread. Если есть идеи, как обрубить руки линтерам тут, то хорошо бы
      уменьшить количество кода тут. А пока вот так.

      const currentUserClone = cloneDeep(state.data) as IUser | null;
      const newUser: IUser | null = { ...currentUserClone as IUser, status: action.payload };
      return { ...state, data: newUser };
      */

    [updateStatus.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    /* GET CURRENT USER */
    [loadCurrentUser.pending.type]: (state) => ({ ...state, loading: true }),
    [loadCurrentUser.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadCurrentUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    /* UPDATE AVATAR */
    [updateAvatar.pending.type]: (state) => ({ ...state, loading: true }),
    [updateAvatar.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [updateAvatar.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { removeCurrentUser } = currentUserSlice.actions;
export { updateStatus, loadCurrentUser, updateAvatar };
export const currentUserReducer = currentUserSlice.reducer;
