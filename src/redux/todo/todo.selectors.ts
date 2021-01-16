import {RootState} from '../types';
import {Todo, TodoState} from './todo.types';

export const getTodoList = (state: RootState): Todo[] => state.todos.todos;
export const getTodoprogress = (state: RootState): boolean =>
  state.todos.progress;
export const getTodoError = (state: RootState): Error | null =>
  state.todos.error;
