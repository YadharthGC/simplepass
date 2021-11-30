import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Edit from "./edit";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} exact={true} />
          <Route path="/" element={<Login />} exact={true} />
          <Route path="/home" element={<Home />} exact={true} />
          <Route path="/edit/:id" element={<Edit />} exact={true} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
