import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import Experience from "./components/Experience/experience";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import Footer from "./components/Footer/footer";
import Codeforces from "./components/Codeforces/Codeforces";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef, useState } from "react";
// import Gototop from "./components/GotoTop/gototop";

// Animation Stuffs
const NavbarVariant = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "-1.5vh",
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1.5,
      type: "spring",
      stiffness: 130,
    },
  },
};

const HomeVariant = {
  hidden: { x: "-100vw", y: "100vh" },
  visible: {
    x: "0vw",
    y: "7vh",
    transition: {
      delay: 0.7,
      duration: 1.5,
      type: "spring",
      stiffness: 70,
      // mass: 0.4,
      // damping: 8,
    },
  },
};

function App() {
  const [mode, setmode] = useState("dark");

  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const ToggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      // document.body.style.backgroundImage = "black";
      // document.body.style.color = "white";
      ShowAlert("Dark Mode has been Enabled", "success");
    } else {
      setmode("light");
      // document.body.style.backgroundImage = "white";
      // document.body.style.color = "black";
      ShowAlert("Dark Mode has been Disabled", "success");
    }
  };
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const codeforces = useRef(null);
  return (
    <>
      <motion.div variants={NavbarVariant} initial="hidden" animate="visible">
        <Navbar
          about={about}
          skills={skills}
          project={project}
          codeforces={codeforces}
          mode={mode}
          // ToggleMode={ToggleMode}
        />
      </motion.div>
      <motion.div variants={HomeVariant} initial="hidden" animate="visible">
        <Home mode={mode} />
      </motion.div>
      <div ref={about}>
        <About mode={mode} />
      </div>
      <div ref={skills}>
        <Experience mode={mode} />
      </div>
      <div ref={project}>
        <Project mode={mode} />
      </div>
      <div ref={codeforces}>
        <Codeforces mode={mode} />
      </div>
      <Footer mode={mode} />
    </>
  );
}
export default App;
