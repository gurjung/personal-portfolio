/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const ProjectList = () => {
  return (
    <>
      <div class="container mt-20 md:mt-48 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
          <h2 id="work" class="secondary-title">
            My work
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <img
              src="images/notes-app.png"
              class="w-full bg-nav h-36 lg:h-72 object-cover"
            />
            <img
              src="images/covid19-tracker.png"
              class="w-full bg-nav h-36 lg:h-72 object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
};
