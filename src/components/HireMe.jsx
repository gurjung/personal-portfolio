import React from "react";
import { AiFillLinkedin, AiFillGithub } from "../icons";
export const HireMe = () => {
  return (
    <div className="container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24">
      <section className="w-full">
        <h2 id="hire" className="secondary-title">
          Hire me
        </h2>
        <p className="section-paragraph">
          Feel free to contact me any time, through any method below.
        </p>

        <div className="grid w-full gap-8 mt-24 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-12">
            <div>
              <label className="block mb-6 text-xl font-bold text-white">
                Name
              </label>
              <input className="w-full px-4 py-4 border border-input-border bg-input" />
            </div>
            <div>
              <label className="block mb-6 text-xl font-bold text-white">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-4 border border-input-border bg-input"
              />
            </div>
            <div>
              <label className="block mb-6 text-xl font-bold text-white">
                Message
              </label>
              <textarea
                type="email"
                className="w-full h-56 px-4 py-4 border resize-none border-input-border bg-input"
              ></textarea>
            </div>
            <button className="px-6 py-2 font-bold text-white bg-theme">
              Send it!
            </button>
          </div>

          <div className="mt-12">
            <p className="text-secondary">12345678</p>
            <a
              href="mailto:email@mydomain.com"
              className="block mt-3 underline text-secondary"
            >
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
