import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState([]);
  const [gmail, setgmail] = useState([]);
  const [no, setno] = useState([]);
  const [street, setstreet] = useState([]);
  const [city, setcity] = useState([]);
  const [district, setdistrict] = useState([]);
  const [state, setstate] = useState([]);
  const [pin, setpin] = useState([]);
  const [password, setpassword] = useState([]);
  const [cpassword, setcpassword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async () => {
    try {
      navigate("/", { replace: true });
      let post = await axios.post(
        "https://yadharthsimplepass.herokuapp.com/register",
        {
          name,
          gmail,
          no,
          street,
          city,
          district,
          state,
          pin,
          password,
        }
      );
    } catch (error) {}
  };

  return (
    <div className="register">
      <div className="heading">Register</div>
      <form
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <div className="name">Name</div>
        <div className="ans">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
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
        <div className="name" style={{ marginTop: "1%" }}>
          <u>Address</u>
        </div>
        <div className="name" style={{ marginTop: "1%" }}>
          House/Flat no.
        </div>
        <div className="ans">
          <input
            type="text"
            value={no}
            onChange={(e) => {
              setno(e.target.value);
            }}
          />
        </div>
        <div className="name">Street</div>
        <div className="ans">
          <input
            type="text"
            value={street}
            onChange={(e) => {
              setstreet(e.target.value);
            }}
          />
        </div>
        <div className="name">city/town</div>
        <div className="ans">
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
        </div>
        <div className="name">District</div>
        <div className="ans">
          <input
            type="text"
            value={district}
            onChange={(e) => {
              setdistrict(e.target.value);
            }}
          />
        </div>
        <div className="name">State</div>
        <div className="ans">
          <input
            type="text"
            value={state}
            onChange={(e) => {
              setstate(e.target.value);
            }}
          />
        </div>
        <div className="name">pincode</div>
        <div className="ans">
          <input
            type="text"
            value={pin}
            onChange={(e) => {
              setpin(e.target.value);
            }}
          />
        </div>
        <div className="name">set Password</div>
        <div className="ans">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="name">Confirm Password</div>
        <div className="ans">
          <input
            type="password"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
        </div>
        <div className="ans" id="submit">
          <input type="submit" value="submit" className="submit" />
        </div>
      </form>{" "}
      <div className="ans" id="submit">
        <Link to="/">Already an user?</Link>
      </div>
    </div>
  );
}

export default Register;
