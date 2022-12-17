import React from "react";
import { useState } from "react";

function Contact() {
  const [user, setuser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
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
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Mobile Number</label>
          <input
            type="email"
            class="form-control"
            name="mobile"
            value={user.mobile}
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <button type="button" className="btn btn-outline-success mt-2">
        Submit
      </button>
    </div>
  );
}

export default Contact;
