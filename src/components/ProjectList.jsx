/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Project } from "./Project";
import { PROJECTS_DATA } from "../utils";
import { TEXTS } from "../constants";
export const ProjectList = () => {
  return (
    <>
      <div className="container flex flex-col flex-wrap items-center w-full px-4 py-10 mx-auto mt-6 rounded-lg shadow-2xl md:mt-40 md:px-14">
          <h2 id="projects" className="text-center secondary-title">
            {TEXTS.WORK}
          </h2>
          <div className="flex flex-col flex-wrap justify-between md:flex-row md:mt-4">
            {PROJECTS_DATA.map((item) => (
              <Project title={item.title} img={item.img} link={item.link}/>
            ))}
          </div>
      </div>
    </>
  );
};
