import React from "react";
import logo2 from "./Images/logo2.png";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            {/* Logo */}
            <div className="image">
              <img
                width="170px"
                height=""
                src={logo2}
                className="img margin-left d pe-2"
                alt="Logo"
              />
            </div>
            {/* Toggle Btn */}
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* SideBar */}
            <div
              className="sidebar offcanvas offcanvas-start"
              tabIndex="0"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              {/* SideBar Header */}
              <div className="offcanvas-header text-white border-bottom">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              {/* SideBar Body */}
              <div className="offcanvas-body">
                <form
                  className="d-flex justify-content-center d "
                  role="Location"
                >
                  <input
                    className="form-control me-2"
                    type="Location"
                    placeholder="Location"
                    aria-label="Location"
                  />
                  {/* <i class="fa fa-map-marker"></i> */}
                </form>

                <form className="d-flex justify-content-center d" role="search">
                  <input
                    className="form-control pd-0"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <ul className="navbar-nav justify-content-start flex-grow-1 ps-4 pe-0 ms-0">
                  <li className="nav-item mx-1">
                    <a className="nav-link mt-1" href="#home">
                      <Link>Home</Link>
                    </a>
                  </li>
                  <li className="nav-item mx-1">
                    <a className="nav-link mt-1" href="#about">
                    <Link>About Us</Link>
                    </a>
                  </li>
                  <div class="btn-group">
                    <a
                      className="nav-link mt-1"
                      // href="#services"
                      data-bs-toggle="dropdown"
                    >
                      <Link>Services</Link>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#homeservices">
                          Home Services
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#tourists">
                          Tourist Hotspots
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#healthcare">
                          Healthcare Access
                        </a>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item mx-1 me-4">
                    <a className="nav-link mt-1" href="#contact">
                    <Link>Contact Us</Link>
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav justify-content-end flex-grow-1 ps-0 pe-0 ms-0">
                  <li className="nav-item mx-0">
                    <a className="nav-link mt-1 mx-2">
                      <Link to="/login">Login</Link>
                    </a>
                  </li>
                  <li className="nav-item mx-0">
                    <a className="nav-link mt-1">
                      <Link to="/signup">Sign Up</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
