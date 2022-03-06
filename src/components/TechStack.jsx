import React from "react";
import { TECH_STACK_DATA } from "../utils/techStack.data";
import { Card } from "../ui/Card";
export const TechStack = () => {
  return (
    <div className="container flex flex-col items-center justify-between w-full px-8 mx-auto mt-20 md:mt-48 md:px-14 lg:px-24">
      <p>I’ve worked with multiple technologies for implementing frontend.</p>
      <div className="grid grid-cols-2 gap-4 mt-6 md:gap-12 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {TECH_STACK_DATA.map((item) => (
          <Card>
            <>
              {item.logo}
              <span className="text-lg text-center md:text-2xl">{item.title}</span>
            </>
          </Card>
        ))}
      </div>
    </div>
  );
};
