import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve existing messages from local storage
    const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    // Create a new message object
    const newMessage = { name, email, message };

    // Add the new message to the array of messages
    const updatedMessages = [...existingMessages, newMessage];

    // Save the updated array to local storage
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");

    // Show a toast notification
    toast.info("Your message has been submitted!");
  };

  return (
    <div className="p-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded mt-3"
        >
          Submit
        </button>
      </form>
      {/* Add ToastContainer here */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Contact;
