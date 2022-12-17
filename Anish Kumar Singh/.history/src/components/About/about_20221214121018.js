import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import { motion } from "framer-motion";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
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
        <div class="card" style={{ width: "18rem", height: "5px" }}>
          <img class="card-img-top" src={Class10} alt="" />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
