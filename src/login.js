import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [gmail, setgmail] = useState([]);
  const [password, setpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(gmail, password);
      let post = await axios.post(
        "https://yadharthsimplepass.herokuapp.com/login",
        {
          gmail,
          password,
        }
      );
      window.localStorage.setItem("app_token", post.data.token);
      navigate("/home", { replace: true });
    } catch (error) {}
  };

  return (
    <div className="register">
      <div className="heading">Login</div>
      <form
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <div className="name">gmail</div>
        <div className="ans">
          <input
            type="text"
            value={gmail}
            onChange={(e) => {
              setgmail(e.target.value);
            }}
          />
        </div>

        <div className="name">Password</div>
        <div className="ans">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <div className="ans" id="submit">
          <input type="submit" value="submit" className="submit" />
        </div>
      </form>
      <div className="ans" id="submit">
        <Link to="/register"> New Register?</Link>
      </div>
    </div>
  );
}

export default Login;
