import React from "react";
import "./project.css";
import Pr1 from "./Projectimages/Project1.jfif";
import Pr2 from "./Projectimages/Project2.jfif";
import Pr3 from "./Projectimages/pj3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pr4 from "./Projectimages/pj4.jpg";
function project(props) {
  return (
    <>
      <div
        className="containerProj"
        style={{
          backgroundColor:
            props.mode === "light" ? "rgb(163, 158, 161)" : "black",
        }}
      >
        <h1 style={{ color: "white" }}>Projects!</h1>
        <div className="container d-flex">
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr1} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
                style={{
                  height: "136px",
                }}
              />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr3} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr4} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
