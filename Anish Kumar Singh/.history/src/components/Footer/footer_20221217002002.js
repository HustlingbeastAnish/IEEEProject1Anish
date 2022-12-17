import React, { useState } from "react";
import { useState } from "react";

const visibility = () => {
  const [visible, setvisible] = useState(false);

  const initialHeight = 250;

  const windowHeight =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (windowHeight > intialHeight) {
    setvisible(true);
  }
};

function footer() {
  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram -->/ */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin -->/ */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* <!-- Github --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating"
              href="#!"
              role="button"
              style={{
                float: "right",
                height: "70px",
                top: "-10px",
              }}
              onClick={gototop}
            >
              <i class="fa-solid fa-arrow-up"></i>
              <p>Go To Top</p>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          {/* © 2020 Copyright: */}
          <a className="text-white" href="/#">
            Portfolio Anish
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default footer;
