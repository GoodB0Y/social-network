import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import * as userController from '../services/user-controller';
import { IUser, IUserFriend } from '../types/user';

const loadFriendsList = createAsyncThunk('friendList/loadFriendsList', async (id: number) => {
  const response = ((await userController.getFriendsByUserId(id)) as unknown) as IUserFriend[];
  const temp: Array<Promise<AxiosResponse<IUser>>> = [];
  response.forEach((item) => temp.push(userController.getUserById(item.id)));
  return Promise.all(temp);
});

interface IFriendsState {
  data: IUser[];
  loading: boolean;
  error: null | Error;
  friendsFilter: string;
}

const initialState: IFriendsState = {
  data: [],
  loading: false,
  error: null,
  friendsFilter: '',
};

const friendsListSlice = createSlice({
  name: 'friendList',
  initialState,
  reducers: {
    setData: (state, action): IFriendsState => ({ ...state, data: action.payload, loading: false }),
    setError: (state, action): IFriendsState => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    setFriendFilter: (state, action): IFriendsState => ({
      ...state,
      friendsFilter: action.payload,
    }),
    setLoading: (state): IFriendsState => ({ ...state, loading: true }),
  },
  extraReducers: {
    [loadFriendsList.pending.type]: (state): IFriendsState => ({ ...state, loading: true }),
    [loadFriendsList.fulfilled.type]: (state, action): IFriendsState => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadFriendsList.rejected.type]: (state, action): IFriendsState => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { setData, setError, setLoading, setFriendFilter } = friendsListSlice.actions;
export { loadFriendsList };
export const friendsReducer = friendsListSlice.reducer;
