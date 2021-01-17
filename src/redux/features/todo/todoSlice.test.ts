import {AnyAction} from '@reduxjs/toolkit';
import todoSlice, {
  Todo,
  TodoState,
  toggleTodo,
  createTodoSuccess,
  startCreateTodo,
} from './todoSlice';
import TodoReducer from './todoSlice';

describe('todos reducer', () => {
  beforeEach(() => {
    TodoReducer(undefined, {} as AnyAction);
  });

  it('should handle initia state', () => {
    expect(TodoReducer(undefined, {} as AnyAction)).toEqual({
      todos: [],
      progress: false,
      error: null,
    });
  });

  it('should handle createTodoSuccess', () => {
    const state: TodoState = {
      todos: [],
      progress: false,
      error: null,
    };

    const todo: Todo = {
      id: 0,
      description: 'New Todo description',
      title: 'New Todo',
    };
    const newState = todoSlice(state, createTodoSuccess(todo));
    expect(newState.todos).toHaveLength(1);
    expect(newState.progress).toBeFalsy();
    expect(newState.error).toBeNull();
  });

  it('should handle startCreateTodo', () => {
    const state: TodoState = {
      todos: [],
      progress: false,
      error: null,
    };

    const newState = todoSlice(state, startCreateTodo());
    expect(newState.progress).toBeTruthy();
  });

  it('should handle toggleTodo', () => {
    const todo: Todo = {
      id: 0,
      description: 'New Todo description',
      title: 'New Todo',
      create_at: new Date(),
      done: true,
      done_at: new Date(),
    };
    const state: TodoState = {
      todos: [
        {
          ...todo,
          done: false,
          create_at: new Date(),
        },
      ],
      progress: true,
      error: null,
    };

    expect(todoSlice(state, toggleTodo(0))).toEqual({
      todos: [todo],
      progress: true,
      error: null,
    });
  });
});
