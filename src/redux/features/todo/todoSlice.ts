import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  title: string;
  description: string;
  done?: boolean;
  done_at?: Date | undefined;
  create_at?: Date;
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
    startCreateTodo(state) {
      state.progress = true;
    },
    createTodoSuccess: {
      reducer: (state: TodoState, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
        state.progress = false;
        state.error = null;
      },
      prepare: (todo: Todo) => {
        return {payload: {...todo, create_at: new Date(), done: false}};
      },
    },
    toggleTodo(state: TodoState, action: PayloadAction<number>) {
      const todo = state.todos.find(todo => action.payload === todo.id);
      if (todo) {
        todo.done = !todo.done;
        todo.done_at = new Date();
      }
    },
  },
});

export const getTodoList = (state: TodoState): Todo[] => state.todos;
export const getTodoprogress = (state: TodoState): boolean => state.progress;
export const getTodoError = (state: TodoState): Error | null => state.error;

export const {
  createTodoSuccess,
  toggleTodo,
  startCreateTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
