/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "../ui"
export const Project = (props) => {
  return (
    <Card size='large'>
      <img
        src={props.img}
        className="object-cover rounded-lg bg-nav lg:h-48"
      />
      <span className="mt-4">{props.title}</span>
    </Card>
  );
};
