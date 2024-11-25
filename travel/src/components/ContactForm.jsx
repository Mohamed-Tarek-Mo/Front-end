import React from "react";

export default function ContactForm() {
  return (
    <div className="container my-5 col-md-8">
      <h2 className="fw-bold my-5">Send a message to us!</h2>
      <form>
        <input
          type="text"
          class="form-control my-4 p-3 border-black"
          placeholder="Name"
        />

        <input
          type="email"
          class="form-control my-4 p-3 border-black"
          aria-describedby="emailHelp"
          placeholder="Email"
        />

        <input
          type="text"
          class="form-control my-4 p-3 border-black"
          placeholder="Subject"
        />

        <textarea
          class="form-control my-4 p-3 border-black"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          class="btn btn-outline-light btn-dark border-black fw-bold p-2 px-3 col-8 col-md-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
