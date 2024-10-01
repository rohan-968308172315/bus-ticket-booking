import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import ProfileDropdown from "../User Dashboard/ProfileDropdown";

export default function Navbar() {
  const usenavigate = useNavigate();
  const username = sessionStorage.getItem("username");
  return (
    <>
      <div className="container-fluid headder border-bottom border-dark ">
        <div className="row">
          <div className="12">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-4">
                    <div className="topheader">
                      <i class="fa-solid fa-phone"></i>
                      <a href="tel:+8446203849" className="nav-link">
                        +918446203849
                      </a>
                    </div>
                  </div>

                  <div className="col-6 d-none d-md-block ">
                    <div className="topheader2">
                      <i class="fa-solid fa-envelope"></i>
                      <a href="pranjaldivate8@gmail.com" className="nav-link">
                        busgateway143@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex align-items-center h-100">
                  <div className="col-12 d-flex justify-content-end">
                    <div className="sign-login-btn ">
                      {username ? (
                        <>
                          {/* <NavLink to="/login" className="me-2">
                            <button className="btn btn-outline-info bg-color2 px-2 p-1">
                              <i class="fa-solid fa-user"></i>Log Out
                            </button>
                          </NavLink> */}
                          <ProfileDropdown username={username} />
                        </>
                      ) : (
                        <>
                          {" "}
                          <NavLink to="/signin" className="me-2">
                            <button className="btn btn-outline-info px-2 p-1 signbutton">
                              <i class="fa-solid fa-user-plus"></i>Sign In
                            </button>
                          </NavLink>
                          <NavLink to="/login">
                            <button className="btn btn-outline-info px-2 p-1 signbutton">
                              <i class="fa-solid fa-right-to-bracket"></i>Login
                            </button>
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand w-25" href="/">
            <img src="/img/navbarlogo.png" className="img-fluid"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className=" fs-2">
              <BsFillMenuButtonWideFill className="border-0 text-color2" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pages">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/faqs">
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/booking">
              <button className="btn btn-info border-0 buyticketsbutton">
                Buy Tickets
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
