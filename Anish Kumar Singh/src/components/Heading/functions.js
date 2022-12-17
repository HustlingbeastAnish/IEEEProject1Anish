import { TweenMax, TimelineMax } from "gsap/gsap-core";

console.clear();
document.querySelector("#action").addEventListener("click", doStuff);
var tl = new TimelineMax({ paused: true });
TweenMax.set(".masker", { scaleX: 0, transformOrgin: "left center" });
TweenMax.set("#demo", { xPercent: -50, yPercent: -50 });
tl.to(".masker", 1.5, { scaleX: 1 });
tl.to(".masker", 1.5, { scaleX: 0, transformOrigin: "right center" });

function doStuff() {
  tl.play(0);
}
