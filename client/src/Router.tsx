import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "Component/Header/Header";
import Main from "./Pages/Main/Main";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import Register from "Pages/Register/Register";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
