import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groups/groupsSlice';
import { userReducer } from './userSlice';
import { allVideosReducer } from './videos/allVideosSlice';
import audiosReducer from '../components/Audio/Audio.slice';
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
  audios: audiosReducer,
  videos: allVideosReducer,
  chat: chatReducer,
  friends: friendsReducer,
  image: imagesReducer,
});

export default rootReducer;
