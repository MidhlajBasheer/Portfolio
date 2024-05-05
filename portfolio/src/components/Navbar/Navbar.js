import React, { useState } from "react";

export default function Navbar() {
  const [menu, showMenu] = useState(true);

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-10">
      <div className="pt-4 flex text-lg text-white justify-between sm:ml-10 sm:mr-20 relative">
        <h1 className="text-4xl font-tac">LEXY</h1>
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
          <div className="bg-green-800 rounded-full px-3 py-1.5 cursor-pointer hover:bg-green-600">
            <p className="text-white">Contact</p>
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
            <div className="mr-2 mt-1 font-poetson text-3xl">X</div>
          )}
        </div>

        {!menu && (
          <div className="absolute right-0 top-full h-fit pb-4 w-[8rem] bg-slate-800 rounded-tl-lg rounded-br-lg rounded-bl-lg block sm:hidden font-blinker">
            <ul className="text-center justify-center pt-3 space-y-2 ">
              <li drop-shadow-2xl>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Experience</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
            </ul>
            <div className="bg-green-800 rounded-full mt-2 px-3 py-1.5 cursor-pointer">
              <p className="text-white text-center">Contact</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
