import React from "react";
import { TECH_STACK_DATA } from "../utils/techStack.data";
import { Card } from "../ui/Card";
export const TechStack = () => {
  return (
    <div className="container flex flex-col items-center justify-between w-full px-8 mx-auto mt-48 md:px-14 lg:px-24">
      <p>
        I’ve worked with multiple technologies for implementing frontend.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        {TECH_STACK_DATA.map((item) => (
          <Card>
            <>
              {item.logo}
              {item.title}
            </>
          </Card>
        ))}
      </div>
      {/* <div class="space-y-12 my-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-6">
            <div class="border border-nav mb-6 lg:mb-0 flex">
              <ImHtmlFive2 />
              <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                <h3 class="text-white text-3xl font-semibold">HTML</h3>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};
