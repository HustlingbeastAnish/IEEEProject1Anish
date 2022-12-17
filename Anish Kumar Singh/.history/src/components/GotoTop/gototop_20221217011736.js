import { useState, useEffect } from "react";

function GotoTop() {
  const [visible, setvisible] = useState(false);

  const Visibilty = () => {
    let minHeight = 250;
    const WindowHeight =
      document.body.scrollTop || document.documentElement.scrollTo;

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
      {/* <div>SUP Global</div> */}
      {visible && (
        <div className="gotobutton" onClick={{ goto }}>
          <i class="fa-solid fa-square-up">GoUp</i>
        </div>
      )}
    </>
  );
}

export default GotoTop;
