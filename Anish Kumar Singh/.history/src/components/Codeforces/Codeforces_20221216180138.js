import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Codeforces.css";
import cardi from "./images/bgimg1.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, ListGroup } from "react-bootstrap";

function Codeforces(props) {
  const [handle, sethandle] = useState("Hustlingbeast_Anish");
  const [users, setusers] = useState([{}]);

  useEffect(() => {
    fetchdetails();
  }, []);

  // To display the toast Container
  const notify = () => toast("Please Enter a valid User Handle");

  const fetchdetails = () => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => {
        setusers(res.data.result[0]);
        console.log(res.data.result[0]);
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          notify();
        }
      });
  };
  return (
    <>
      <div
        id="Main"
        style={{
          backgroundColor:
            props.mode === "light" ? "rgb(170, 153, 153)" : "black",
        }}
      >
        <div className="container d-flex  flex-column align-items-center border border-dark">
          <h2 className="topheading text-white">
            Get Your Codeforces Details Here
          </h2>
          <div className="container d-flex flex-row justify-content-center ">
            <div className="form-group p-1 ">
              <label htmlFor="exampleInputEmail1" className="text-white">
                CodeForces UserName
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Handle Here"
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
              />
              <small id="emailHelp" className="form-text text-muted ">
                We'll never share your details
              </small>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-primary p-2 border border-dark mt-4"
              onClick={fetchdetails}
              style={{ width: "47px", borderRadius: "12px", height: "45px" }}
            >
              Find
            </button>
          </div>
          <div className="container m-2 d-flex">
            <div className="card border border-dark" style={{ width: "20rem" }}>
              <img
                src={users.titlePhoto}
                className="card-img-top"
                alt=""
                id="userimage"
              />
              <div className="card-body mb-3 border border-dark">
                <div className="container">
                  <h5>
                    Name: {users.firstName} {users.lastName}
                  </h5>
                  <h5>Title: {users.rank}</h5>
                  <h5>Current Rank: {users.maxRank}</h5>
                  <h5>Rating: {users.rating}</h5>
                  <h5>Highest Rating: {users.maxRating}</h5>
                </div>
              </div>
            </div>
            <Card style={{ width: "18rem", marginLeft: "450px" }}>
              <Card.Img
                variant="top"
                src={cardi}
                style={{
                  height: "150px",
                }}
              />
              <Card.Body>
                <Card.Text>
                  {users.firstName} is from {users.country} and he currently
                  lives in the city {users.city} . He was last online{" "}
                  {/* {users.lastOnlineTimeSeconds} hours ago */}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Total Friends of {users.firstName} : {users.friendOfCount}
                </ListGroup.Item>
                <ListGroup.Item>
                  Organisation : {users.organization}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                  Visit {users.firstName}'s Profile
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Codeforces;
