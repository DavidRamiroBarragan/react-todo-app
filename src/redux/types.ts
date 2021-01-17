import {Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {TodoState} from './features/todo/todoSlice';
import {store} from './store';

export type RootState = {
  todos: TodoState;
};
export type AppDispatch = typeof store.dispatch;
export type AppThunK = ThunkAction<void, RootState, unknown, Action<string>>;
