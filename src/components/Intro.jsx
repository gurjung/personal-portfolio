import React from "react";
import { ViewIcon } from '../icons'

export const Intro = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center max-w-xl mt-0 lg:ml-20 md:justify-start md:my-20">
        <h1 className="text-5xl font-bold text-center md:text-6xl lg:text-7xl md:text-left">
          Building
          <br /> beautiful web experiences
        </h1>
        <div className="flex justify-center w-full md:justify-start">
          <button className="flex items-center px-8 py-4 mt-12 space-x-3 font-bold text-white bg-theme">
            <div>
              <ViewIcon />
            </div>
            <span>View my work.</span>
          </button>
        </div>
      </div>
    </>
  );
};
