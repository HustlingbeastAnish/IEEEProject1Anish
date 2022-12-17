import React from "react";
import { gsap } from "gsap";
import "./header.css";
function Headerr() {
  document.querySelector("#action").addEventListener("click", doStuff);
  var tl = new TimelineMax({ paused: true });
  TweenMax.set(".masker", { scaleX: 0, transformOrgin: "left center" });
  TweenMax.set("#demo", { xPercent: -50, yPercent: -50 });
  tl.to(".masker", 1.5, { scaleX: 1 });
  tl.to(".masker", 1.5, { scaleX: 0, transformOrigin: "right center" });

  function doStuff() {
    tl.play(0);
  }
  return (
    <div>
      <button id="action">Play It</button>
      <svg id="demo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
        <defs>
          <clipPath id="theClipPath">
            <rect
              class="masker"
              x="0"
              y="0"
              width="500"
              height="100"
              fill="#fff"
            />
          </clipPath>
        </defs>
        <rect x="0" y="0" width="500" height="100" fill="#fff" />
        <text text-anchor="middle" x="250" y="60" font-size="36">
          Change the text
        </text>
        <rect class="masker" x="0" y="0" width="500" height="100" fill="red" />
        <g id="clipPathReveal" clip-path="url(#theClipPath)">
          <text text-anchor="middle" x="250" y="60" font-size="36" fill="white">
            Change the text
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Headerr;
