"use client";

import { FormEvent, useState } from "react";
import "./requestForm.scss";

export const RequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact/", {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const createdRequest = await res.json();
        console.log(createdRequest);
        setName("");
        setEmail("");
        setMessage("");
        setAlert(true);
      } else {
        console.log("Error submitting request");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const displayAlert = () => {
    if (alert === true) {
      return (
        <div className="alert">
          <span>Success! Your request was successfully sent.</span>
          <button onClick={() => setAlert(false)}></button>
        </div>
      );
    }
  };
  return (
    <form onSubmit={handleSubmit} className="request-form">
      <p>Submit your request</p>
      <div className="columns">
        <label className="columns__name">
          <input
            onChange={(e) => setName(e.target.value)}
            required={true}
            value={name}
            type="text"
            placeholder="Your name *"
            className="columns__name--input"
          />
        </label>
        <label className="columns__email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            value={email}
            type="text"
            placeholder="Your email *"
            className="columns__email--input"
          />
        </label>
        <label className="columns__message">
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message *"
            className="columns__message--input"
          />
        </label>
      </div>
      <div className="button-container">
        <button type="submit" className="button-container__button">
          SUBMIT
        </button>
      </div>
      {displayAlert()}
    </form>
  );
};

export default RequestForm;
