// src/components/Logout.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Logout = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  if (!user) return null;

  return (
    <div>
      <p>Logged in as: <strong>{user.name}</strong></p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Logout;