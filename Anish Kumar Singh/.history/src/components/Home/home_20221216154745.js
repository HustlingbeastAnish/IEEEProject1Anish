import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// import DAnimation from "../DAnimation/App";
function Home(props) {
  const [heading, setheading] = useState(true);
  setInterval(() => {
    setheading(false);
  }, 9000);
  return (
    <div
      className="container1"
      style={{
        background:
          "-webkit-gradient(linear,left top,right top, from(#f9f9f9),color-stop(50%,white),color-stop(50%,black),to(black))",
        background:
          "linear-gradient(to right,#f9f9f9 0%,white 50%,black 50%,black 100%)",
      }}
    >
      {/* <DAnimation /> */}
      <AnimatePresence>
        {
          <motion.h1
            className="homehead"
            initial={{ opacity: 0 }}
            animate={{
              // color: "white",
              scale: "1.3",
              y: -210,
              fontSize: "75px",
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 3.5,
              type: "spring",
              stiffness: 80,
            }}
            exit={{
              y: [-50, 190, -50, 190, -50, 190],
              opacity: 1,
            }}
          >
            Hello Everyone! I am Anish Kumar Singh
          </motion.h1>
        }
      </AnimatePresence>
      <h2>I'm a </h2>
      <div className="typer">
        <Typewriter
          // style={{
          //   color: props.mode === "light" ? "black" : "white",
          // }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Learner")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Programmer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Data Structures Enthusiast")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Developer")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Home;
