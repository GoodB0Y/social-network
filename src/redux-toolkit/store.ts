import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { TypeRootReducer } from './rootReducer';
import { IUser } from '../types/user';
import { IGroup, IFullGroupInfo, IGroupPosts } from '../types/group';

const store = configureStore({
  reducer: rootReducer,
});

// console.log('store', store);

const newRootReducer = require('./rootReducer').default;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(newRootReducer);
  });
}

export interface IStore {
  user: {
    data: IUser;
    error: Error;
    loading: boolean;
  };
  groups: {
    groups: IGroup[];
    memberOf: number[];
    error: Error;
    loading: boolean;
  }
  singleGroup: {
    groupInfo: IFullGroupInfo;
    posts: IGroupPosts[];
    error: Error;
    loading: boolean;
  }
}
export type TypeDispatch = typeof store.dispatch;
export type TypeThunkAction = ThunkAction<void, TypeRootReducer, null, Action<string>>;

export default store;
