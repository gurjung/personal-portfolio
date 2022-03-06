import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillLinkedin, AiFillGithub } from "../icons";

export const HireMe = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    emailjs
      .sendForm(
        "service_9n079dg",
        "template_vppwp0s",
        formRef.current,
        "Gfu_INqQ9eCpWU25M"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };
  return (
    <div className="container flex items-center justify-between w-full px-8 mx-auto mt-20 shadow-2xl md:mt-48 md:px-14 lg:px-24">
      <section className="w-full">
        <h2 id="hire" className="secondary-title">
          Hire me
        </h2>
        <p className="section-paragraph">
          Feel free to contact me any time, through any method below.
        </p>

        <div className="grid w-full gap-8 mt-24 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-12">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label className="block mb-2 text-xl font-bold text-white">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-4 border border-input-border bg-input"
              />
              <label className="block mb-2 text-xl font-bold text-white">
                Subject
              </label>
              <input
                type="text"
                name="user_subject"
                className="w-full px-4 py-4 border border-input-border bg-input"
              />
              <label className="block mb-2 text-xl font-bold text-white">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-4 border border-input-border bg-input"
              />
              <label className="block mb-2 text-xl font-bold text-white">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full h-56 px-4 py-4 border resize-none border-input-border bg-input"
              ></textarea>
              <button className="px-6 py-2 mb-2 font-bold text-white bg-theme">
                Send it!
              </button>
            </form>
            {done && <span>"Thank you contacting me..."</span>}
          </div>

          <div className="mt-12">
            <p className="text-secondary">12345678</p>
            <a href="#/" className="block mt-3 underline text-secondary">
              email@mydomain.com
            </a>

            <div className="flex mt-20 space-x-6">
              <a href="#/">
                <AiFillGithub />
              </a>
              <a href="#/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
