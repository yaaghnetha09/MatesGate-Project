import React from "react";
import img from "./Images/matesgate-logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [user2, setUser2] = useState({
    username2: "",
    password2: ""
  });

  const [user, setUser] = useState({
    username: "",
    phoneno: "",
    email: "",
    password: "",
    role: ""
  });

  const { username2, password2 } = user2;
  const { username, phoneno, email, password, role } = user;

  const onInput2 = (e) => {
    setUser2({ ...user2, [e.target.name]: e.target.value });
  };

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/register", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onsubmit2 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", user2);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="section"
        style={{
          backgroundColor: "#1f2029",
          color: "#ffeba7",
          display: "flex"
        }}
      >
        <div
          className="row full-height justify-content-center "
          style={{ width: "55%" }}
        >
          <div className="col-12 text-center align-self-center py-0">
            <div className="section pb-0 pt-0 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        {/* <h4 className="mb-4 pb-3">Log In</h4> */}
                        <form
                          // onSubmit={(e) => {
                          //   onsubmit2(e);
                          // }}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                          }}
                        >
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              name="username2"
                              placeholder="UserName"
                              value={username2}
                              onChange={(e) => {
                                onInput2(e);
                              }}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              name="password2"
                              placeholder="Password"
                              value={password2}
                              onChange={(e) => {
                                onInput2(e);
                              }}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            type="submit"
                            className="btn mt-4"
                            onClick={onsubmit2}
                          >
                            Login
                          </button>
                        </form>
                        <p className="mb-0 mt-4 text-center">
                          <a className="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <form
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                          }}
                        >
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style"
                              name="username"
                              placeholder="Full Name"
                              value={username}
                              onChange={(e) => {
                                onInput(e);
                              }}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="tel"
                              className="form-style"
                              name="phoneno"
                              placeholder="Phone Number"
                              value={phoneno}
                              onChange={(e) => {
                                onInput(e);
                              }}
                            />
                            <i className="input-icon uil uil-phone"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={(e) => {
                                onInput(e);
                              }}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              name="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => {
                                onInput(e);
                              }}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          {/* Role Selection */}
                          <div className="form-group mt-1">
                            <select
                              className="form-style"
                              name="role"
                              value={role}
                              onChange={(e) => {
                                onInput(e);
                              }}
                            >
                              <option value="">Select Role</option>
                              <option value="USER">User</option>
                              <option value="WORK">Worker</option>
                            </select>
                          </div>
                          <button
                            type="submit"
                            className="btn mt-2"
                            onClick={onsubmit}
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sideImage"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div className="container">
            <img
              src={img}
              alt="matesgate"
              style={{ paddingTop: "2rem", height: "60%" }}
            />
            <h1
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
              }}
            >
              <b>MATESGATE</b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
