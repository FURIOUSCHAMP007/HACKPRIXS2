import React from "react";

const Contact = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-2 rounded h-32"
        ></textarea>
        <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;