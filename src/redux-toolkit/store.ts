import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { TypeRootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const newRootReducer = require('./rootReducer').default;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(newRootReducer);
  });
}

export type TypeDispatch = typeof store.dispatch;
/*
Вне папки redux-toolkit использовать ИСКЛЮЧИТЕЛЬНО RootState для типизации стора
во избежание разночтений.
*/
export type RootState = ReturnType<typeof store.getState>;
export type TypeThunkAction = ThunkAction<void, TypeRootReducer, null, Action<string>>;

export default store;
