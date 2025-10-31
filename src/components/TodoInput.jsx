// src/components/TodoInput.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  if (!user) return null;

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <div>
      <input className='m-2'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button className="m-2" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;