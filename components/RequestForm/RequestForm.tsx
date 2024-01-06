"use client";

import { FormEvent, useState } from "react";

export const RequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        console.log("Request created");
        const createdRequest = await res.json();
        console.log(createdRequest);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Error submitting request");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="name">
          <span>Name: </span>
          <input
            onChange={(e) => setName(e.target.value)}
            required={true}
            value={name}
            type="text"
          />
        </label>
        <label className="email">
          <span>Email:</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            value={email}
            type="text"
          />
        </label>
        <label className="message">
          <span>Message:</span>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default RequestForm;
