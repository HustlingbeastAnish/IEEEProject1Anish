import { useState, useEffect } from "react";

function GotoTop() {
  const [visible, setvisible] = useState(false);

  const Visibilty = () => {
    let minHeight = 250;
    const WindowHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

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
    return () => window.removeEventListener("scroll", Visibilty);
  }, []);

  return (
    <>
      {/* <div>SUP Global</div> */}
      {visible && (
        <div className="gotobutton">
          <button type="button" class="btn btn-info" onClick={{ goto }}>
            Info
            {/* <i class="fa-solid fa-square-up"></i>  */}
          </button>
        </div>
      )}
    </>
  );
}

export default GotoTop;
