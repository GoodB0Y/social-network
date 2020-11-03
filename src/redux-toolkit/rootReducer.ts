import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groups/groupsSlice';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import { imagesReducer } from './imagesSlice';
import { singleGroupsReducer } from './groups/singleGroupSlice';
import { friendsReducer } from './friendsListSlice';
import { postsReducer } from './postsSlice';
import chatReducer from './chatSlice';
import { currentUserReducer } from './currentUserSlice';

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupsReducer,
  singleGroup: singleGroupsReducer,
  currentUser: currentUserReducer,
  posts: postsReducer,
  allAudiosReducer,
  chat: chatReducer,
  friends: friendsReducer,
  image: imagesReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
