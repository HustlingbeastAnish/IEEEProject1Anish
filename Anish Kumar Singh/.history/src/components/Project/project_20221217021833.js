import React from "react";
import "./project.css";
import Pr1 from "./Projectimages/Project1.jfif";
import Pr2 from "./Projectimages/Project2.jfif";
import Pr3 from "./Projectimages/pj3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pr4 from "./Projectimages/pj4.jpg";
import Pr6 from "./Projectimages/movieapp.jpeg";
import Contact from "../Contact/contact";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hey Found My Projects Interesting ? Contact Me by filling the form
          below
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <Contact />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Project(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div
        className="containerProj"
        style={{
          backgroundColor:
            props.mode === "light" ? "rgb(163, 158, 161)" : "black",
        }}
      >
        <div className="container d-flex justify-content-around">
          <h1 style={{ color: "white" }}>Projects!</h1>
          <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            size="sm"
          >
            Click Here to Contact
          </Button>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="container d-flex">
          <div className="containerp">
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img src={Pr1} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header ">TextFormatter</div>
                <a href="/#" className="btn btn-primary">
                  Visit on GitHuB
                </a>
              </div>
            </div>
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">NewsWebsite</div>
                <a href="/#" className="btn btn-primary">
                  Visit On GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
                style={{
                  height: "136px",
                }}
              />
              <div className="card">
                <div className="card-header">PersonalPortfolio</div>
                <a href="/#" className="btn btn-primary">
                  Visit On GitHub
                </a>
              </div>
            </div>
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img src={Pr3} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">SpotifyClone</div>
                <a href="/#" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img src={Pr4} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">CRUD Application</div>
                <a href="/#" className="btn btn-primary">
                  Visit on GitHuB
                </a>
              </div>
            </div>
            <div className="card mx-5 my-3" style={{ width: "18rem" }}>
              <img
                src={Pr6}
                className="card-img-top"
                alt="..."
                style={{
                  height: "150px",
                }}
              />
              <div className="card">
                <div className="card-header">MovieApplication</div>
                <a href="/#" className="btn btn-primary">
                  Visit on GitHuB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
