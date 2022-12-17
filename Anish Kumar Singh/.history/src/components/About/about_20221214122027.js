import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import { motion } from "framer-motion";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
import Jee from "./aboutimages/imgs/aboutresult3.jpg";
import Contact from "../Contact/contact";
import { useState } from "react";
function About(props) {
  const [ShowContact, SetShowContact] = useState(false);
  return (
    <>
      <div
        className="about"
        id="About"
        style={{
          backgroundColor:
            props.mode === "light" ? "rgb(170, 153, 153)" : "black",
        }}
      >
        <div className="content_about">
          <h2>About Me!</h2>
          <hr />
        </div>
        <div className="container d-flex align-items-center">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.5}
          >
            <img src={Anishlogo} alt="..." srcSet="" className="anishlogo" />
          </motion.div>
          <div className="containera">
            <p>
              Hey Everyone I am Anish Kumar Singh , a Second year Computer
              Science Undergrad at Birla Institute of Technology Mesra
            </p>
          </div>
        </div>
        <div className="container d-flex">
          <div className="card m-5 p-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  color: "black",
                }}
              >
                Completed Class 10 CBSE Board Examination with an overall
                percentage of 90.2%
              </p>
            </div>
          </div>
          <div className="card m-5 p-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  color: "black",
                }}
              >
                Completed Class 12 CBSE Board Examination with an overall
                percentage of 93.0%
              </p>
            </div>
          </div>
          <div
            className="card m-5 p-2"
            style={{ width: "18rem", height: "450px" }}
          >
            <img className="card-img-top" src={Jee} alt="" />
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  color: "black",
                }}
              >
                Qualified Joint Entrance Examination Mains with an overall
                Percentile of 98.256%ile
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
