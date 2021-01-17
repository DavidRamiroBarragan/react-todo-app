import {combineReducers} from '@reduxjs/toolkit';
import TodoReducer from './features/todo';
const rootReducer = combineReducers({todos: TodoReducer});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
