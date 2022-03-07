import React from "react";
import { ViewIcon } from "../icons";
import Typed from "react-typed";
import { TEXTS } from "../constants";
export const Intro = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto mt-8 align-center lg:ml-20 md:my-20">
        <Typed
          strings={[
            TEXTS.INTRO_DESC1,
            TEXTS.INTRO_DESC2,
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
          className="text-5xl font-bold text-center text-white md:text-6xl lg:text-7xl md:text-left bg-body"
        ></Typed>
        <div className="flex flex-col items-center justify-center w-full md:flex-row">
          <button className="flex items-center px-8 py-4 mx-4 space-x-3 font-bold text-white rounded-lg md:mt-12 bg-theme">
            <div>
              <ViewIcon />
            </div>
            <a href="#projects">{TEXTS.VIEW_WORK}</a>
          </button>
          <button className="flex items-center px-8 py-4 mx-4 mt-4 space-x-3 font-bold text-white rounded-lg md:mt-12 bg-theme">
            <div>
              <ViewIcon />
            </div>
            <a href="#hire">{TEXTS.VIEW_CV}</a>
          </button>
        </div>
      </div>
    </>
  );
};
