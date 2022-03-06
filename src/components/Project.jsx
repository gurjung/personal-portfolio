/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "../ui"
export const Project = (props) => {
  return (
    <Card>
      <img
        src={props.img}
        className="object-cover w-full bg-nav lg:h-20"
      />
      <span>{props.title}</span>
    </Card>
  );
};
