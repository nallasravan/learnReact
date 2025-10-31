// src/reducers/authReducer.js
import { LOGIN, LOGOUT } from '../actions/authActions';

const initialState = null; // No user initially

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authReducer;