import React from "react";

export default function Navbar() {
  return (
    <div className="pt-4 flex text-lg text-white justify-between sm:ml-10 sm:mr-20">
      <h1 className="text-4xl font-tac ">LEXY</h1>
      <div className="space-x-8 items-center hidden sm:flex font-secular">
        <ul className="space-x-8 sm:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
        <div className="bg-cyan-800 rounded-full px-3 py-1.5 cursor-pointer">
          <p className="text-white">Contact</p>
        </div>
      </div>
      <div className="menu-icon sm:hidden">
        <div class="w-9 h-1 mt-2 bg-white" />
        <div class="w-9 h-1 mt-2 bg-white" />
        <div class="w-9 h-1 mt-2 bg-white" />
        <div class="w-9 h-1 mt-2 bg-white" />
      </div>
    </div>
  );
}
