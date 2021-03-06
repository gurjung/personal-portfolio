/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "../ui";
export const Project = (props) => {
  return (
    <Card size="large" classNameProp="project-card">
      <a href={props.link} className="text-center">
        <img
          src={props.img}
          className="object-cover rounded-lg bg-nav lg:h-48"
        />
        <span className="mt-4 text-base md:text-2xl">{props.title}</span>
      </a>
    </Card>
  );
};
