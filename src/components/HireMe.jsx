import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillLinkedin, AiFillGithub } from "../icons";
import { TEXTS } from "../constants";
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
          console.log(result);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };
  return (
    <footer className="container flex flex-col items-center justify-between w-full px-8 mx-auto mt-20 shadow-2xl md:flex-row md:mt-48 md:px-14 lg:px-24">
      <section>
        <p id="hire">{TEXTS.FOOTER_DESC}</p>
        <div className="flex items-center justify-center px-5 mt-8">
          <a href="https://github.com/gurjung" className="px-5">
            <AiFillGithub size={60} />
          </a>
          <a href="#/">
            <AiFillLinkedin size={60} />
          </a>
        </div>
      </section>
      <div className="flex flex-col md:flex-row">
        <div className="space-y-12">
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className="block my-2 text-xl font-bold text-white">
              {TEXTS.FORM.NAME}
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-4 border rounded-lg border-input-border bg-input"
            />
            <label className="block my-2 text-xl font-bold text-white">
              {TEXTS.FORM.SUBJECT}
            </label>
            <input
              type="text"
              name="user_subject"
              className="w-full px-4 py-4 border rounded-lg border-input-border bg-input"
            />
            <label className="block my-2 text-xl font-bold text-white">
              {TEXTS.FORM.EMAIL}
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-4 border rounded-lg border-input-border bg-input"
            />
            <label className="block my-2 text-xl font-bold text-white">
              {TEXTS.FORM.MESSAGE}
            </label>
            <textarea
              type="text"
              name="message"
              className="w-full h-56 px-4 py-4 border rounded-lg resize-none border-input-border bg-input"
            ></textarea>
            <button className="px-6 py-2 my-2 font-bold text-white rounded-lg bg-theme">
              {TEXTS.FORM.SUBMIT}
            </button>
          </form>
          {done && <span>{TEXTS.FORM.CONFIRMATION}</span>}
        </div>
        {/* <div className="flex items-center justify-center px-5 mb-5 mt-15">
            <a href="https://github.com/gurjung" className="px-5">
              <AiFillGithub />
            </a>
            <a href="#/">
              <AiFillLinkedin />
            </a>
          </div> */}
      </div>
    </footer>
  );
};
