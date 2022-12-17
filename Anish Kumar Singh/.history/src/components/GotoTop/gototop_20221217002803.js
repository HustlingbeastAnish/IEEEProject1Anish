import React from "react";
import { useState, UseEffect } from "react";

const Visibilty = () => {
  const minHeight = 250;
  const [visibile, setvisible] = useState(false);
  const WindowHeight =
    document.body.scrollTo || document.documentElement.scrollTo;

  if (WindowHeight > minHeight) {
    setvisible(true);
  }
};

function GotoTop() {
  return <i class="fa-solid fa-square-up"></i>;
}

export default GotoTop;
