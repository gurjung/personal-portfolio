import React from "react";
import { classNames } from "../utils";
export const Card = ({ size, children, classNameProp = "" }) => {
  return (
    <div
      className={`flex-row flex-wrap items-center justify-center h-28 md:h-40 card ${classNameProp}`}
    >
      <div
        className={classNames(
          size === "large" ? "w-48 md:w-64 lg:w-96" : "w-36",
          "bg-gray-800 rounded-lg"
        )}
      >
        <div
          className={classNames(
            size === "large" ? "md:h-60 lg:h-80 flex-wrap" : "h-28 flex-wrap",
            "flex items-center justify-center px-5 text-gray-200 rounded-lg border-solid border-2 border-theme"
          )}
        >
          <div
            className={classNames(
              size === "large" ? "py-3" : "",
              "flex flex-col items-center"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
