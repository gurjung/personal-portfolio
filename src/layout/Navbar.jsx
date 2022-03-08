import React, { useState } from "react";
import { MenuIcon, CgClose } from "../icons";
import { TEXTS } from "../constants";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-6 mb-8">
      <div className="flex items-center justify-between mr-2">
        <section className="flex justify-between">
          <span className="flex items-center ml-2 text-lg font-bold">
            {TEXTS.NAME}
          </span>
          <div className="absolute right-0 items-center hidden mr-2 space-x-6 md:space-x-12 md:flex">
            <a href="#/" className="text-lg text-selected-text md:text-2xl">
              {TEXTS.URIS.HOME}
            </a>
            <a href="#tech" className="sm:text-lg md:text-2xl">
              {TEXTS.URIS.TECH}
            </a>
            <a href="#projects" className="sm:text-lg md:text-2xl">
              {TEXTS.URIS.PROJECTS}
            </a>
            <a href="#hire" className="sm:text-lg md:text-2xl">
              <button className="px-6 py-2 font-bold rounded-lg bg-theme">
                {TEXTS.URIS.CONTACT}
              </button>
            </a>
          </div>
        </section>
        <div
          className="flex items-center justify-end md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <CgClose /> : <MenuIcon />}
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="mt-8 md:hidden">
          <a
            href="#/"
            className="block px-4 py-2 mt-2 text-base text-center hover:bg-theme"
          >
            {TEXTS.URIS.HOME}
          </a>
          <a
            href="#tech"
            className="block px-4 py-2 mt-2 text-base text-center hover:bg-theme"
          >
            {TEXTS.URIS.TECH}
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 mt-2 text-base text-center hover:bg-theme"
          >
            {TEXTS.URIS.PROJECTS}
          </a>
          <a
            href="#hire"
            className="block px-4 py-2 mt-2 text-base text-center hover:bg-theme"
          >
            {TEXTS.URIS.CONTACT}
          </a>
        </div>
      )}
    </nav>
  );
};
