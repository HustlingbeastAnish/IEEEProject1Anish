import React from "react";
import { useState, UseEffect } from "react";

const gototop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Visibilty = () => {
  const minHeight = 250;
  const [visibile, setvisible] = useState(false);
  const WindowHeight =
    document.body.scrollTo || document.documentElement.scrollTo;

  if (WindowHeight > minHeight) {
    setvisible(true);
  } else {
    setvisible(false);
  }
};

function GotoTop() {
  return <i class="fa-solid fa-square-up"></i>;
}

export default GotoTop;
