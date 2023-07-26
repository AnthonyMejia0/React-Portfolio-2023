import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [sendButtonText, setSendButtonText] = useState("Send Message");

  const serviceKey = "service_pyrkk3l";
  const templateKey = "template_oqh5xer";
  const publicKey = "b8PPtf8zQNbiZEWdA";

  const resetButton = () => {
    if (sendButtonText !== "Send Message") {
      setSendButtonText("Send Message");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSendButtonText("Sending...");

    emailjs.sendForm(serviceKey, templateKey, formRef.current, publicKey).then(
      (result) => {
        setSendButtonText("Message Sent");
        e.target.reset();
      },
      (error) => {
        setSendButtonText("Unable to Send");
      }
    );
  };

  return (
    <div id="contact" className="bg-black py-10 w-screen">
      <h2 className="mb-5 mx-auto text-white font-bold text-3xl lg:text-5xl w-max font-playfair">
        Contact Me
      </h2>

      <p className="px-5 text-gray-400 font-playfair text-center tracking-wide lg:text-lg">
        Feel free to send me a message and I'll do my best to get back to you as
        soon as possible.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="my-10 mx-auto space-y-8 w-[65vw] flex flex-col"
      >
        <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-10">
          <input
            onChange={resetButton}
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />
          <input
            onChange={resetButton}
            type="email"
            name="user_email"
            placeholder="E-Mail"
            required
          />
        </div>
        <input
          onChange={resetButton}
          type="text"
          name="message"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="font-playfair tracking-wider font-bold border w-max mx-auto px-7 py-2 text-white hover:bg-white hover:text-dark-blue"
        >
          {sendButtonText}
        </button>
      </form>
    </div>
  );
}

export default Contact;
