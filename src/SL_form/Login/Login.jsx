import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [getshow, setshow] = useState();
  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const handleonlogin = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("http://localhost:3000/user?username=" + username)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok " + res.statusText);
          }
          return res.json();
        })
        .then((resp) => {
          if (resp.length === 0) {
            toast.error("Please Enter valid username");
          } else {
            const user = resp[0];
            // console.log(resp.jwtToken);
            if (user.password === password) {
              toast.success("Login Successful");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("jwttoken", resp.jwtToken);
              usenavigate("/");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <>
      <div className={`${styles.container} container-fluid m-0 p-0`}>
        <div className={styles.main}>
          <div className="h-100 d-flex justify-content-center">
            <form
              className={`${styles.loginForm} z-1 d-flex align-self-center`}
              onSubmit={handleonlogin}>
              <h1>Login</h1>
              <input
                value={username}
                onChange={(e) => usernameupdate(e.target.value)}
                autoComplete="off"
                placeholder="Username"></input>
              <br />
              <i
                className={`fa-solid fa-user ${styles.icon}`}
                style={{ color: "#ffffff" }}></i>
              <input
                type={getshow ? "text" : "password"}
                value={password}
                onChange={(e) => passwordupdate(e.target.value)}
                placeholder="Password"></input>
              <br />
              <i
                onClick={() => {
                  setshow(!getshow);
                }}
                className={`fa-solid fa-lock ${styles.icon}`}
                style={{ color: "#ffffff" }}></i>
              <p className="text-primary">Forgot Password?</p>
              <button type="submit" className="bg-color border-0">
                Login
              </button>
              <h6>
                Don't have an account?{" "}
                <b>
                  <NavLink to="/signin" className="text-primary">
                    Register
                  </NavLink>
                </b>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
