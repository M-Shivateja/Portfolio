import React, { useState } from "react";
import { Link } from "react-router-dom";
import github from "../Images/github2.png";
import linkedin from "../Images/linkedin1.png";
import email from "../Images/gmail.png";
function Contact() {
  const formActionUrl = "https://formspree.io/f/xwpeyarg";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(formActionUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        response.send("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("There was a problem sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div class="text-white text-center">
      <div className="font-acme font-light">
        <h5 class=" mt-4  sm:text-2xl">Contact Me Here..</h5>
        <p class="mt-4 sm:text-2xl">
          I'd love to hear from you! You can reach me through
        </p>
        <div class="flex items-center justify-center gap-8 mt-4 ">
          <Link
            to="https://github.com/M-Shivateja"
            target="_blank"
            className="w-8 hover:scale-105  duration-300"
          >
            <img src={github} alt="git" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/shiva-teja-m-80b616239/"
            target="_blank"
            className="w-8 hover:scale-105  duration-300"
            id="lnkdn"
          >
            <img src={linkedin} alt="linkedin" />
          </Link>
          <Link to="mailto:mshivateja08@gmail.com" target="_blank">
            <img
              src={email}
              alt="email"
              className="w-8 hover:scale-105 duration-300"
            />
          </Link>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6  mx-8  ">
        <div class="text-white rounded-lg shadow-lg p-8 w-96 dark:text-white-50 bg-skills-color backdrop-blur bg-blur rounded-lg">
          <h5 class="text-center text-blue-400 text-2xl font-semibold mb-4">
            Drop a message
          </h5>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <input
                type="text"
                name="name"
                class="w-full px-4 py-2 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                name="email"
                class="w-full px-4 py-2 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div class="mb-4">
              <textarea
                name="message"
                class="w-full px-4 py-2 bg-blue-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
