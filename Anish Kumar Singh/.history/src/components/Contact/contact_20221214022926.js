import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact(props) {
  const notifyError = () => toast("Name and email are required");
  const notifySuccess = () => toast("Submitted Succesfully");
  const [user, setuser] = useState({
    username: "",
    mobile: "",
    email: "",
    message: "",
  });

  // Changing the variables on referencing
  let name, value;
  // name and value variable are there for referencing

  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    console.log(name);
    // Use of Object Destructoring to assign values effectively
    setuser({ ...user, [name]: value });
  };

  const checkFeilds = () => {
    try {
      if (user.username.length === 0 || user.email.length === 0) {
        notifyError();
        // console.log("Name and email Section cannot be empty");
      } else {
        // notifySuccess("Your Message has been sent successfully");
        notifySuccess();
      }
    } catch (err) {
      console.log(err);
      notifyError();
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
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="username"
            value={user.name}
            onChange={handle}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Mobile Number</label>
          <input
            type="text"
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
            type="text"
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
        onClick={checkFeilds}
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
