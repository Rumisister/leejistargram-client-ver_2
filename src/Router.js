import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Login/Signup/Signup";
import AddFeed from "./pages/Main/AddFeed/AddFeed";

import App from "./pages/App/App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addfeed" element={<AddFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
