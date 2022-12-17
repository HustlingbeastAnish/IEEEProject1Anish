import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = (props) => {
  // const ServicesRef = useRef(null);
  const gotoServices = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg bg-${props.mode} text-light mt-2`}
        style={{
          cursor: "pointer",
          color: `${props.mode === "light" ? "black" : "white"}`,
        }}
      >
        <div className="container-fluid" id="nav">
          <a className="navbar-brand text-light" href="/#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                // id="navv"
                className="nav-item"
                onClick={() => {
                  gotoServices(props.home);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              >
                Home
              </li>
              <li
                // id="navv"
                className="nav-item"
                onClick={() => {
                  gotoServices(props.about);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              >
                About
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.skills);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              >
                Skills
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.project);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              >
                Project Page
              </li>
              <li
                className="nav-item"
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                onClick={() => {
                  gotoServices(props.codeforces);
                }}
              >
                Codeforces
              </li>
              <Link
                className="nav-item"
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                to="/contact"
              >
                Contact
              </Link>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.ToggleMode}
                id="flexSwitchCheckChecked"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckChecked"
                style={{
                  cursor: "pointer",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
              >
                Enable {props.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
