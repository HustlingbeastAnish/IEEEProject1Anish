import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import { motion } from "framer-motion";
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
      </div>
    </>
  );
}

export default About;
