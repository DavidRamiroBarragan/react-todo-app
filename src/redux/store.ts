import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import TodoReducer from './todo/todo';

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
