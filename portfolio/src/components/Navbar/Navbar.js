import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menu, showMenu] = useState(true);

  return (
    <div className="pt-4 flex text-lg text-white justify-between sm:ml-10 sm:mr-20 fixed top-0 left-8 right-8 sm:left-0 sm:right-0 ">
      <h1 className="text-4xl font-tac sm:ml-9">LEXY</h1>
      <div className="space-x-8 items-center hidden sm:flex font-secular">
        <ul className="space-x-8 sm:flex">
          <li className="hover:scale-110 duration-300">
            <Link to="home" spy={true} smooth={true} offset={-1} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="hover:scale-110 duration-300">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className="bg-green-800 rounded-full px-3 py-1.5 cursor-pointer hover:bg-green-600">
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="menu-icon sm:hidden" onClick={() => showMenu(!menu)}>
        {menu ? (
          <>
            <div className="w-9 h-1 mt-2 bg-white" />
            <div className="w-9 h-1 mt-2 bg-white" />
            <div className="w-9 h-1 mt-2 bg-white" />
          </>
        ) : (
          <div className="mr-2 mt-1 font-poetson text-3xl ">X</div>
        )}
      </div>

      {!menu && (
        <div className="absolute right-0 top-full h-fit pb-4 w-32 bg-slate-800 rounded-tl-lg rounded-br-lg rounded-bl-lg block sm:hidden font-blinker transition-all duration-300">
          <ul className="text-center justify-center pt-3 space-y-2 ">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-1}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="bg-green-800 rounded-full mt-2 mx-3 px-3 py-1.5 cursor-pointer text-center">
            <Link to="footer" spy={true} smooth={true} offset={-50}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
