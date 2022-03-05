import React from "react";
import { MenuIcon } from "../icons";

export const Navbar = () => {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between w-full px-8 mx-auto md:px-14 lg:px-24">
        <div className="text-lg font-bold">Gurjung Singh</div>
        <div className="items-center hidden space-x-12 md:flex">
          <a href="#/" className="text-selected-text">
            Home
          </a>
          <a href="#tech">Tech i use</a>
          <a href="#projects">My work</a>
          <a href="#hire">
            <button className="px-6 py-2 font-bold bg-theme">Hire me</button>
          </a>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};
