import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getChats, getSingleChats } from '../services/chat-controller/chat-controller';
import { Ichat, IsingleChat } from '../types/chat';
import { getSingleChatMessages, getUserChats } from '../services/chat-controller/chat-controller';

// const loadChatsOfUser = createAsyncThunk('chat/loadChatsOfUser', async () => {
//   const response = await getChats();
//   return response;
// });
//
// const loadCurrentChat = createAsyncThunk('chat/loadCurrentChat', async (id: number) => {
//   console.log('chat', id);
//   const response = await getSingleChats(id);
//   return response;
// });

const loadChatsOfUser = createAsyncThunk('chat/loadChatsOfUser', async (userId: number) =>
  getUserChats(userId));

const loadCurrentChat = createAsyncThunk('chat/loadCurrentChat', async (id: number) =>
  getSingleChatMessages(id));

export interface StateChat {
  chats: {
    data: Ichat[];
    loading: boolean;
    error: null | Error;
  };
  currentChat: {
    data: IsingleChat[];
    loading: boolean;
    error: null | Error;
  };
}

const initialState: StateChat = {
  chats: {
    data: [],
    loading: false,
    error: null,
  },
  currentChat: {
    data: [],
    loading: false,
    error: null,
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: {
    [loadChatsOfUser.pending.type]: (state) =>
      ({
        ...state,
        chats: { data: [],
          loading: true,
          error: null },
      }),
    [loadChatsOfUser.fulfilled.type]: (state, action) =>
      ({
        ...state,
        chats: { data: action.payload,
          loading: false,
          error: null },
      }),
    [loadChatsOfUser.rejected.type]: (state, action) =>
      ({
        ...state,
        chats: {
          data: [],
          loading: false,
          error: action.error,
        },
      }),

    [loadCurrentChat.pending.type]: (state) =>
      ({
        ...state,
        currentChat: { data: [],
          loading: true,
          error: null },
      }),
    [loadCurrentChat.fulfilled.type]: (state, action) =>
      ({
        ...state,
        currentChat: { data: action.payload,
          loading: false,
          error: null },
      }),
    [loadCurrentChat.rejected.type]: (state, action) =>
      ({
        ...state,
        currentChat: {
          data: [],
          loading: false,
          error: action.error,
        },
      }),
  },
});

// export const { } = chatSlice.actions;
export { loadChatsOfUser, loadCurrentChat };
const chatReducer = chatSlice.reducer;
export default chatReducer;
