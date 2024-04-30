import React from "react";

export default function Navbar() {
  return (
    <div className="pt-4 flex text-lg text-white justify-between ml-10 mr-20">
      <h1 className="text-4xl ">LEXY</h1>
      <div className="flex space-x-8 font-semibold items-center">
        <ul className="space-x-8 hidden sm:flex">
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
    </div>
  );
}
