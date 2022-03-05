import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
export const TechStack = () => {
  return (
    <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section class="w-full">
        <p class="section-paragraph">
          I’ve worked with multiple technologies for implementing frontend.
        </p>

        {/* <!-- TechStack --> */}
        <div class="space-y-12 my-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-6">
            {/* <!-- Tech Logo--> */}
            <div class="border border-nav mb-6 lg:mb-0 flex">
              <ImHtmlFive2 />
              {/* <!-- Tech Name --> */}
              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">HTML</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
