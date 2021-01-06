import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../../services/groups-controller/groups-controller';
import { Group, GroupUser, GroupRequestProps } from '../../types/group';

const loadGroups = createAsyncThunk('groups/loadGroups', async (page: number) => {
  const response = await groupController.apiGroups(page);
  return response;
});

const joinGroup = createAsyncThunk('groups/joinGroup', async (props: GroupRequestProps) => {
  const response = await groupController.apiJoinGroup(props);
  return [response, props.groupId];
});

const leaveGroup = createAsyncThunk('groups/leaveGroup', async (props: GroupRequestProps) => {
  const response = await groupController.apiLeaveGroup(props);
  return [response, props.groupId];
});

const loadAllUsers = createAsyncThunk('groups/loadUsers', async (props: GroupRequestProps) => {
  const response = await groupController.apiLoadUsers(props);
  // Переделать когда появится возможность сразу получать все группы юзера
  const res = response.some((element: GroupUser) => element.userId === props.userId);
  if (res) {
    return props.groupId;
  }
  return null;
});

interface Groups {
  groups: Group[];
  memberOf: number[];
  error: null | Error;
  loading: boolean;
}

const initialState: Groups = {
  groups: [],
  memberOf: [],
  error: null,
  loading: false,
};
const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    getGroups: (state, action): Groups => ({
      ...state,
      groups: action.payload,
    }),
    getAllUsers: (state, action): Groups => ({
      ...state,
      memberOf: action.payload,
    }),
    _joinGroup: (state): Groups => ({
      ...state,
    }),
    _leaveGroup: (state): Groups => ({
      ...state,
    }),
  },
  extraReducers: {
    [loadGroups.pending.type]: (state): Groups => ({ ...state, loading: true }),
    [loadGroups.fulfilled.type]: (state, action): Groups => ({
      ...state,
      groups: action.payload,
      loading: false,
    }),
    [loadGroups.rejected.type]: (state, action): Groups => ({
      ...state,
      error: action.error,
      loading: false,
    }),

    [joinGroup.pending.type]: (state): Groups => ({ ...state, loading: true }),
    [joinGroup.fulfilled.type]: (state, action): Groups => ({
      ...state,
      memberOf: [...state.memberOf, action.payload[1]],
      loading: false,
    }),
    [joinGroup.rejected.type]: (state, action): Groups => ({
      ...state,
      error: action.error,
      loading: false,
    }),

    [leaveGroup.pending.type]: (state): Groups => ({ ...state, loading: true }),
    [leaveGroup.fulfilled.type]: (state, action): Groups => {
      const newArr = state.memberOf.filter((item) => (item === action.payload[1] ? null : item));
      return { ...state, memberOf: newArr, loading: false };
    },
    [leaveGroup.rejected.type]: (state, action): Groups => ({
      ...state,
      error: action.error,
      loading: false,
    }),

    [loadAllUsers.pending.type]: (state): Groups => ({ ...state, loading: true }),
    [loadAllUsers.fulfilled.type]: (state, action): Groups => {
      // Переделать когда появится возможность сразу получать все группы юзера
      if (state.memberOf.some((element: number) => element === action.payload)) {
        return { ...state, loading: false };
      }
      if (action.payload) {
        return { ...state, memberOf: [...state.memberOf, action.payload], loading: false };
      }
      return { ...state, loading: false };
    },
    [loadAllUsers.rejected.type]: (state, action): Groups => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroups, _joinGroup, _leaveGroup, getAllUsers } = groupsSlice.actions;
// export { loadGroups, loadGroupInfo, joinGroup, leaveGroup, loadAllUsers };
export { loadGroups, joinGroup, leaveGroup, loadAllUsers };
export const groupsReducer = groupsSlice.reducer;
