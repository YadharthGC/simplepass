import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const [datas, setdatas] = useState([]);
  const [name, setname] = useState([]);
  const [no, setno] = useState([]);
  const [street, setstreet] = useState([]);
  const [city, setcity] = useState([]);
  const [district, setdistrict] = useState([]);
  const [state, setstate] = useState([]);
  const [pin, setpin] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  let handlesubmit = async (e) => {
    try {
      let did = params.id;
      navigate("/home", { replace: true });
      let post = await axios.put(
        `https://yadharthsimplepass.herokuapp.com/edit/${params.id}`,
        {
          name,
          no,
          street,
          city,
          district,
          state,
          pin,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
    } catch (error) {}
  };

  return (
    <div className="register">
      <div className="heading">Edit profile</div>
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

        <div className="ans" id="submit">
          <input type="submit" value="change" className="submit" />
        </div>
      </form>
      <div className="ans" id="submit">
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          &larr;&nbsp;Go Back
        </button>
      </div>
    </div>
  );
}

export default Edit;
