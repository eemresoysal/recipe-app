import React from "react";
import "./login_style.scss";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

//! import alertify

//? ------------------------------------------------------

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "emre",
    password: "1234",
  });
  //   console.log(user.name);
  const [entry, setEntry] = useState({
    first: "",
    second: "",
  });
  const [check, setCheck] = useState(false);

  const checkPassword = () => {
    if (user.name === entry.first && user.password === entry.second) {
      setCheck(true);
    } else {
      //   alertify.alert("Ready!");
      alert("Please check your username or password !");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entry);
    checkPassword();
    navigate("/home");
  };

  return (
    <div className="login">
      <div>
        <h1>RECIPE PROJECT</h1>
      </div>
      <div className="inputBox">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputUsername">
            <div>
              <CiUser className="icon" />
            </div>
            <input
              className="input"
              type="text"
              onChange={(e) => (entry.first = e.target.value)}
              id=""
              placeholder="emre"
            />
          </div>
          <div className="inputPassword">
            <div>
              <RiLockPasswordFill className="icon" />
            </div>
            <input
              className="input"
              type="password"
              onChange={(e) => (entry.second = e.target.value)}
              id=""
              placeholder="1234"
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
