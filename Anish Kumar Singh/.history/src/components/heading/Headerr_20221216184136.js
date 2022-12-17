import React from "react";
import { gsap } from "gsap";
import "./header.css";
function Headerr() {
  const tlh = gsap.timeline({
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.4,
    onUpdate: changeIt,
  });
  const tlv = gsap.timeline({
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.4,
    paused: true,
    onUpdate: changeIt,
  });
  const colorArray = [
    "#94c356",
    "#46a4cc",
    "#50a39e",
    "#a63e4b",
    "#e3aa59",
    "#a63ba0",
    "#a2a2a2",
    "#0f0f0f",
  ];
  let count = document.querySelectorAll(".theCount");
  let swatches = document.querySelectorAll(".swatch");

  // prevent FOUC
  gsap.set("#wrap", { autoAlpha: 1 });

  // fill the 8 swatches from the color array and listen for click
  swatches.forEach((obj, i) => {
    gsap.set(obj, { backgroundColor: colorArray[i] });
    obj.index = i;
    obj.addEventListener("click", colorChange);
  });

  // alternating horizontal and vertical timeline animations
  tlh.to("#maskerH", { duration: 4, attr: { x: 0 }, ease: "none" });
  tlv.to("#maskerV", { duration: 2, attr: { y: 0 }, ease: "none" });

  // change the percentage counter based on the active timeline progress
  function changeIt() {
    newPercent = (this.progress() * 100).toFixed();
    count.forEach((obj, i) => {
      obj.textContent = newPercent;
    });
  }

  //change colors on click
  function colorChange() {
    gsap.to("#startColor, #bgChange", {
      fill: colorArray[this.index],
      ease: "none",
    });
    gsap.to("#bgFixed", { stroke: colorArray[this.index], ease: "none" });
  }

  // toggle listener and timeline switcher
  document
    .querySelector("#toggleDirection")
    .addEventListener("click", toggleTimelines);

  function toggleTimelines() {
    if (tlh.isActive()) {
      this.textContent = "Switch To Horizontal";
      tlh.pause(0);
      tlv.play();
    } else {
      this.textContent = "Switch To Vertical";
      tlv.pause(0);
      tlh.play();
    }
  }
  return (
    <div>

    <button id="action">Play It</button>
<svg id="demo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100" />
<defs>
<clipPath id="theClipPath">
   <rect class="masker" x="0" y="0" width="500" height="100" fill="#fff" />
</clipPath>  
</defs> 
<rect x="0" y="0" width="500" height="100" fill="#fff" /> 
<text text-anchor="middle" x="250" y="60" font-size="36">Change the text</text>
<rect class="masker" x="0" y="0" width="500" height="100" fill="red" />
<g id="clipPathReveal" clip-path="url(#theClipPath)">
  <text text-anchor="middle" x="250" y="60" font-size="36" fill="white">Change the text</text>
</g>
</svg>
  </div>
  );
}

export default Headerr;
