import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
import Class12 from "./aboutimages/imgs/aboutresult2.jpg";
import Jee from "./aboutimages/imgs/aboutresult3.jpg";
import Present from "./aboutimages/imgs/bitlogo1.png";
import { motion } from "framer-motion";
function about(props) {
  return (
    <>
      <div className="about" id="About" style={{
        backgroundColor:(props.mode==="light")?"rgb(190, 153, 153)"
      }}>
        <div className="content_about">
          <h2>About Me!</h2>
          <hr />
        </div>
        <div className="container d-flex align-items-center">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.5}
          >
            <img src={Anishlogo} alt="..." srcSet="" className="anishlogo" />
          </motion.div>
          <div className="containera">
            <p>
              Hey Everyone I am Anish Kumar Singh , a Second year Computer
              Science Undergrad at Birla Institute of Technology Mesra
            </p>
          </div>
        </div>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          download
        >
          Click to download Resume
        </a>
        <div
          className="container mt-2 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div
              className="carousel-inner"
              style={{
                height: "350px",
              }}
            >
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <p
                    className=""
                    style={{
                      color: "black",
                      marginBottom: "335px",
                    }}
                  >
                    Completed Class 10 From DBMS Kadma High School with 90.2% in
                    the year 2019
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <p
                    className=""
                    style={{
                      color: "black",
                      marginBottom: "335px",
                    }}
                  >
                    Completed Class 12 From DBMS Kadma High School with 93.0% in
                    the year 2021
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  <p
                    className=""
                    style={{
                      color: "black",
                      marginBottom: "335px",
                    }}
                  >
                    Currently a 2nd Year Computer Science Undergrad at Birla
                    Institute of Technology
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
