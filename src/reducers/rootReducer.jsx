// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  user: authReducer,
  todos: todoReducer
});

export default rootReducer;