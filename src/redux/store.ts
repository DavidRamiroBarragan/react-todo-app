import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import TodoReducer from './features/todo';

const reducer = {
  todos: TodoReducer,
};
const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
