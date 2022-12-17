import React from "react";
import { useState, UseEffect } from "react";

const visibilty = () => {
  const minHeight = 250;
  const [Visibile, setVisible] = useState(false);
  const WindowHeight =
    document.body.scrollTo || document.documentElement.scrollTo;

  if (WindowHeight > minHeight) {
  }
};

function GotoTop() {
  return <i class="fa-solid fa-square-up"></i>;
}

export default GotoTop;
