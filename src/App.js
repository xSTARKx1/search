import React, {useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { UsersList, UpdateUser, CreateUser } from './pages';
import {usersAsync} from "./features/users/usersSlice";
import {useDispatch} from "react-redux";

import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersAsync());
    }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UsersList />}/>
            <Route path="/create" element={<CreateUser />}/>
            <Route path="/update/:id" element={<UpdateUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
