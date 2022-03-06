/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Project } from "./Project";
import { PROJECTS_DATA } from "../utils/projects.data";

export const ProjectList = () => {
  return (
    <>
      <div className="container flex items-center justify-between w-full px-8 mx-auto mt-20 md:mt-48 md:px-14 lg:px-24">
        <section className="w-full">
          <h2 id="work" className="secondary-title">
            My work
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_DATA.map((item) => (
              <Project title={item.title} img={item.img} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
