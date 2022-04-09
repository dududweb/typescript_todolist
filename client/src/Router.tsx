import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "Component/Header/Header";
import Main from "./Pages/Main/Main";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import SignUp from "Pages/SignUp/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
