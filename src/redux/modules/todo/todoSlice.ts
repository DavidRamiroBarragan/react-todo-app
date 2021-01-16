import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Todo = {
  title: string;
  description: string;
  done: boolean;
  done_at: Date;
  create_at: Date;
};

export interface TodoState {
  todos: Todo[];
  progress: boolean;
  error: Error | null;
}

const initialState: TodoState = {
  todos: [],
  progress: false,
  error: null,
} as TodoState;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      state.progress = true;
      state.error = null;
    },
  },
});

export const getTodoList = (state: TodoState): Todo[] => state.todos;
export const getTodoprogress = (state: TodoState): boolean => state.progress;
export const getTodoError = (state: TodoState): Error | null => state.error;

export const {create} = todoSlice.actions;
export default todoSlice.reducer;
