import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../../services/groups-controller/groups-controller';
import { GroupPosts, GroupInt, SubmitData } from '../../types/group';

const loadGroupInfo = createAsyncThunk('groups/loadGroupInfo', async (id: string) => {
  const response = await groupController.apiSingleGroup(id);
  return response;
});

const loadGroupPosts = createAsyncThunk('groups/loadGroupPosts', async (id: string) => {
  const response = await groupController.apiGroupInfo(id);
  return response;
});

const updateGroup = createAsyncThunk('group/updateGroup', async (data: SubmitData) => {
  const response = await groupController.apiUpadteGroup(data);
  return response;
});

interface State {
  groupInfo: GroupInt | null;
  posts: GroupPosts[] | null;
  error: Error | null;
  loading: boolean;
}

const initialState: State = {
  groupInfo: null,
  posts: null,
  error: null,
  loading: false,
};
const singleGroupSlice = createSlice({
  name: 'groupInfo',
  initialState,
  reducers: {
    getGroupInfo: (state, action): State => ({
      ...state,
      groupInfo: action.payload,
    }),
    getGroupPosts: (state, action): State => ({
      ...state,
      posts: action.payload,
    }),
  },
  extraReducers: {
    [loadGroupInfo.pending.type]: (state): State => ({ ...state, loading: true }),
    [loadGroupInfo.fulfilled.type]: (state, action): State => ({
      ...state,
      groupInfo: action.payload,
      loading: false,
    }),
    [loadGroupInfo.rejected.type]: (state, action): State => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [loadGroupPosts.pending.type]: (state): State => ({ ...state, loading: true }),
    [loadGroupPosts.fulfilled.type]: (state, action): State => ({
      ...state,
      posts: action.payload,
      loading: false,
    }),
    [loadGroupPosts.rejected.type]: (state, action): State => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [updateGroup.pending.type]: (state): State => ({ ...state, loading: true }),
    [updateGroup.fulfilled.type]: (state, action): State => ({
      ...state,
      groupInfo: action.payload,
      loading: false,
    }),
    [updateGroup.rejected.type]: (state, action): State => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroupInfo, getGroupPosts } = singleGroupSlice.actions;
export { loadGroupInfo, loadGroupPosts, updateGroup };

export const singleGroupsReducer = singleGroupSlice.reducer;
