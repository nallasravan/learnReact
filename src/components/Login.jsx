// src/components/Login.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ id: 1, name: 'John Doe' }));
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as John Doe</button>
    </div>
  );
};

export default Login;