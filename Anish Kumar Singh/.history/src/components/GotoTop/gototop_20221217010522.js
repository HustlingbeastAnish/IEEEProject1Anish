import React, { useEffect } from "react";
import { useState, UseEffect } from "react";
import { useFetcher } from "react-router-dom";

function GotoTop() {
  const [visible, setvisible] = useState(false);
  const Visibilty = () => {
    const minHeight = 250;
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
  };

  useEffect(() => {
    window.addEventListener("scroll", Visibilty);
  }, []);
  return (
    <>
      {visible && (
        <div className="gotobutton">
          <i class="fa-solid fa-square-up">Up</i>
        </div>
      )}
    </>
  );
}

export default GotoTop;
