import React from "react";

export const card = (props) => {
  return (
    <div class="h-screen flex items-center justify-center">
      <div class="bg-gray-800 rounded-lg w-48">
        <div class="text-gray-200 items-center px-5 pt-5">
          <div class="flex flex-row">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
