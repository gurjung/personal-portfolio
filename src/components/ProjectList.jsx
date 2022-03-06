/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Project } from "./Project";
import { PROJECTS_DATA } from "../utils";

export const ProjectList = () => {
  return (
    <>
      <div className="container flex flex-col flex-wrap items-center w-full px-4 py-10 mx-auto border-2 border-white border-solid rounded-lg shadow-2xl h-128 md:mt-10 md:px-14">
          <h2 id="work" className="text-center secondary-title">
            My Recent work
          </h2>
          <div className="grid grid-cols-1 mt-6 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_DATA.map((item) => (
              <Project title={item.title} img={item.img} />
            ))}
          </div>
      </div>
    </>
  );
};
