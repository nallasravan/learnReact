// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




function App() {
  const user = useSelector(state => state.user);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Redux Todo App</h1>

      {user ? (
        <>
          <Logout />
          <hr />
          <h3>Add Todo</h3>
          <TodoInput />
          <hr />
          <h3>Your Todos</h3>
<TodoList/>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;