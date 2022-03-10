import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { AddUser, UserList, ViewUser } from './pages';

export default function App() {

  return (
    <Routes>
        <Route path="/" exact element={<AddUser />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/viewUser" element={<ViewUser />} />
    </Routes>
  );
}