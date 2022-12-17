import React from "react";

function Contact() {
  return (
    <div
      className="container mt-5 mb-5 p-5"
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
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Mobile Number</label>
          <input
            type="email"
            class="form-control"
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
    </div>
  );
}

export default Contact;
