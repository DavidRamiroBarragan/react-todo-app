import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo, TodoState} from './todo.types';

const initialState = {todos: [], progress: false, error: null} as TodoState;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
  },
});

export const {create} = todoSlice.actions;
export default todoSlice.reducer;
