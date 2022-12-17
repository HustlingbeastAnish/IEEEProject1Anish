import React from "react";
import { gsap } from "gsap";

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
    <div id="wrap">
      <svg
        id="maskDemo"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="200"
        viewBox="0 0 400 200"
      >
        <title>Invert SVG text fill color with masks</title>
        <defs>
          <mask id="theMask">
            <rect
              id="maskerH"
              width="400"
              height="200"
              x="-400"
              y="0"
              fill="#fff"
            />
            <rect
              id="maskerV"
              width="400"
              height="200"
              x="0"
              y="200"
              fill="#fff"
            />
          </mask>
        </defs>
        <rect
          id="bgFixed"
          width="400"
          height="200"
          fill="white"
          stroke="#94c356"
          stroke-width="4"
        />
        <g id="startColor" fill="#94c356" font-size="100">
          <text class="theCount" text-anchor="end" x="220" y="140">
            100
          </text>
          <text text-anchor="start" x="230" y="140">
            %
          </text>
        </g>

        <g mask="url(#theMask)">
          <rect id="bgChange" width="400" height="200" fill="#94c356" />
          <g id="end" fill="white" font-size="100">
            <text class="theCount" text-anchor="end" x="220" y="140">
              100
            </text>
            <text text-anchor="start" x="230" y="140">
              %
            </text>
          </g>
        </g>
      </svg>

      <div id="colorControls">
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
        <div class="swatch"></div>
      </div>

      <button id="toggleDirection">Switch To Vertical</button>
    </div>
  );
}

export default Headerr;
