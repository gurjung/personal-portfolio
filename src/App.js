import React from "react";
import { Navbar } from "./layout";
import { Intro, TechStack, ProjectList, HireMe } from "./components";
import "react-typed/dist/animatedCursor.css";

export const App = () => {
  return (
    <div className="text-3xl font-bold">
      <Navbar />

      <Intro />

      <TechStack />

      <ProjectList />

      <HireMe />
    </div>
  );
};
