import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () => toast("Email and Password are required");
  const [user, setuser] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  // Changing the variables on referencing
  let name, value;
  // name and value variable are there for referencing

  const handle = (e) => {
    name = e.target.value;
    value = e.target.name;

    // Use of Object Destructoring to assign values effectively
    setuser({ ...user, [name]: value });
    console.log(e);
  };

  const checkFeilds = () => {
    if (user.name.length === 0 || user.email.length === 0) {
      notify();
    }
  };

  return (
    <div
      className="container mt-5 mb-5 p-5 d-flex flex-column "
      style={
        {
          // backgroundColor: "black",
        }
      }
    >
      <h2>Hey I'm Open to Work </h2>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={user.name}
            onChange={handle}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Mobile Number</label>
          <input
            type="email"
            class="form-control"
            name="mobile"
            value={user.mobile}
            onChange={handle}
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={user.email}
            onChange={handle}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            value={user.message}
            onChange={handle}
          ></textarea>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-outline-success mt-2"
        onSubmit={checkFeilds}
      >
        Submit
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact;
