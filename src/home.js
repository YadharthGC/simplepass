import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [datas, setdatas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch();
  }, []);
  let fetch = async () => {
    try {
      let get = await axios.get(
        "https://yadharthsimplepass.herokuapp.com/details",
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      console.log(get);
      setdatas([...get.data]);
    } catch (error) {}
  };

  return (
    <div className="register">
      <div className="heading">Profile</div>
      {datas.map((data) => {
        return (
          <div>
            <div className="name" id="spl">
              <Avatar alt={data.name} src="" style={{ textAlign: "center" }} />
            </div>
            <div className="name">{data.name}</div>
            <div className="name">{data.gmail}</div>
            <div className="name">{data.no}</div>
            <div className="name">{data.street}</div>
            <div className="name">{data.town}</div>
            <div className="name">{data.district}</div>
            <div className="name">{data.state}</div>
            <div className="name">{data.pin}</div>
            <div className="ans" id="submit">
              <Link to={`/edit/${data._id}`}> Edit</Link>
            </div>
          </div>
        );
      })}
      <div className="ans" id="submit">
        <button
          onClick={() => {
            window.localStorage.removeItem("app_token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
