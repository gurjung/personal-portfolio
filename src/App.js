import React from "react";
import { Navbar } from "./layout"
import { Intro, TechStack, Projects, HireMe } from "./components";

export const App = () => {
  return (
    <div className="text-3xl font-bold">
      <Navbar />
      {/* Intro Section */}
      <Intro />
      {/* Tech Stack */}
      <TechStack />
      {/* Projects */}
      <Projects />
      {/* Hire Me */}
      <HireMe />
    </div>
  );
};
