// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Callback from './components/Practice/Callback';
import ExpensiveComponent from './components/Memo/ExpensiveComponent';
import ExpensiveComponentWithoutMemo from './components/Memo/ExpensiveComponentWithoutMemo';
import ReducerDemo from './components/ReducerDemo/ReducerDemo';
import Todo from './components/TODO/Todo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Fakestoreproducts from './components/fakestore/Fakestoreproducts';
import Fakestorecategory from './components/fakestore/Fakestorecategory';
import Fakestoredetails from './components/fakestore/Fakestoredetails';





function App() {
  // const user = useSelector(state => state.user);

  return (
    <div className='App'>
    {/* <BrowserRouter>
    <header className='p-5  d-flex justify-content-between'>
      <div>HOME</div>
      <nav>
        <ul className='d-flex'>  

          <li className='m-5'>
            <Link to="/todo">Todo App</Link>
          </li>
          <li className='m-5'>
            <Link to="/callback">Callback Practice</Link>
          </li>
          <li className='m-5'>
            <Link to="/reducer">Reducer Demo</Link>
          </li>
        </ul>
      </nav>
      <div>   <Link to="/Login">Login</Link></div>
    </header>
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/reducer" element={<ReducerDemo />} />
      <Route path="/Login" element={<Login /> } />
    </Routes>
    
    </BrowserRouter> */}

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Fakestoreproducts />} />
      <Route path="/products/:category" element={<Fakestorecategory />} >
      <Route path=":id" element={<Fakestoredetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;