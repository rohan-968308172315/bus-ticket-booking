import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const navigate = useNavigate();
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [number, numberchange] = useState("");
  const [username, usernamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [gender, genderchange] = useState("male");

  const handleonSubmit = (e) => {
    let formdata = { name, email, number, username, password, gender };

    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        navigate("/login");
      })
      .catch((err) => {
        alert("login failed" + err);
      });
    namechange("");
    emailchange("");
    numberchange("");
    usernamechange("");
    passwordchange("");
    genderchange("");
  };

  return (
    <>
      <div className="container1">
        <div className="main">
          <img src="img/london-bus-1.jpg" alt="London-bus-1" />
          <div className="row main1">
            <div className="col-6 section-1">
              <form onSubmit={handleonSubmit} className="signup_form">
                <h1 className="text-white text-center p-2">Sign Up</h1>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  required
                  value={name}
                  onChange={(e) => namechange(e.target.value)}></input>
                <i className="fa-solid fa-user"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={email}
                  onChange={(e) => emailchange(e.target.value)}></input>
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  value={number}
                  onChange={(e) => numberchange(e.target.value)}></input>
                <i className="fa-solid fa-phone"></i>
                <input
                  type="username"
                  value={username}
                  name="username"
                  autoComplete="off"
                  className="mb-2"
                  onChange={(e) => usernamechange(e.target.value)}
                  placeholder="User Name"
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  name="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={password}
                  onChange={(e) => passwordchange(e.target.value)}></input>
                <i className="fa-solid fa-lock"></i>
                <div className="d-inline-flex text-white p-2 from-group">
                  <label className="me-2">Male</label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => genderchange(e.target.value)}
                    name="gender"
                  />
                  <label className="mx-2">Female</label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => genderchange(e.target.value)}
                    name="gender"
                  />
                </div>
                <div className="text-center w-100">
                  <button type="reset" className="px-4 bt-info w-25 bg-color2">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-color ms-1 bt-info w-25  ">
                    Submit
                  </button>
                </div>
                <h6 className="text-white p-0">
                  Already have Memebar?{" "}
                  <b>
                    <NavLink to="/login" className="text-primary">
                      Login
                    </NavLink>
                  </b>
                </h6>
              </form>
            </div>
            <div className="col-6 section-2 ">
              <h1>
                Welcome To <br></br>BusGateWay
              </h1>

              <h3>
                {" "}
                If you could travel<br></br> anywhere in the world <br></br>
                right now,where would<br></br> you go and why?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
