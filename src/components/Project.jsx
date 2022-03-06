/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Project = (props) => {
  return (
    <div>
      <img
        src={props.img}
        className="object-cover w-full bg-nav h-36 lg:h-72"
      />
      <span>{props.title}</span>
    </div>
  );
};
