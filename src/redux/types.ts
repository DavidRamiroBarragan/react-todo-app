import {Todo} from './modules/todo/todoSlice';
import {store} from './store';

export type RootState = {
  todos: Todo[];
};
export type AppDispatch = typeof store.dispatch;
