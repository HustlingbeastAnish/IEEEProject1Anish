import React from "react";
import { useState, UseEffect } from "react";

const Visibilty = () => {
  const minHeight = 250;
  const [visible, setvisible] = useState(false);
  const WindowHeight =
  document.body.scrollTo || document.documentElement.scrollTo;
  
  if (WindowHeight > minHeight) {
    setvisible(true);
  } else {
    setvisible(false);
  }
};

const goto = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
function GotoTop()
 {
  return (
  
    <div>
      {visible && (
        <div className="gotobutton">
          <i class="fa-solid fa-square-up">Up</i>
        </div>
      )}
    </div>
  );
}
export default GotoTop;
