import React from "react";
import { MenuIcon } from "../icons";
import { TEXTS } from "../constants";
export const Navbar = () => {
  return (
    <nav className="py-6 mb-8">
      <div className="container flex items-center justify-between w-full px-8 mx-auto shadow-2xl md:px-14 lg:px-24">
        <div className="text-lg font-bold">{TEXTS.NAME}</div>
        <div className="items-center hidden space-x-12 md:flex">
          <a href="#/" className="text-selected-text">
            {TEXTS.URIS.HOME}
          </a>
          <a href="#tech">{TEXTS.URIS.TECH}</a>
          <a href="#projects">{TEXTS.URIS.PROJECTS}</a>
          <a href="#hire">
            <button className="px-6 py-2 font-bold rounded-lg bg-theme">
              {TEXTS.URIS.CONTACT}
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};
