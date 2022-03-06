import React from "react";
import { Navbar } from "./layout"
import { Intro, TechStack, ProjectList, HireMe } from "./components";

export const App = () => {
  return (
    <div className="text-3xl font-bold">
      <Navbar />
      {/* Intro Section */}
      <Intro />
      {/* Tech Stack */}
      <TechStack />
      {/* Projects */}
      <ProjectList />
      {/* Hire Me */}
      <HireMe />
    </div>
  );
};
