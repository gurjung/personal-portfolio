import React from "react";

export const Card = (props) => {
  return (
    <div className="flex-row flex-wrap items-center justify-center h-20 mr-2 md:h-40">
      <div className="bg-gray-800 rounded-lg w-36 md:w-56">
        <div className="flex items-center justify-center h-20 px-5 text-gray-200 md:h-32">
          <div className="flex flex-col items-center">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
