import React from "react";
import "./header.css";
function Headerr() {
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
