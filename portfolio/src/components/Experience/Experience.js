import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="sm:m-7 mb-20">
      <h1 className="text-center sm:text-start font-blinker text-2xl sm:ml-10 mb-3 sm:text-3xl sm:mb-6 text-white">
        Professional Experience
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 sm:mx-10 sm:mb-10 text-white mb-4 justify-center">
        <img
          className="max-w-md rounded-3xl hidden sm:flex"
          src="./assets/images/soften.jpg"
          alt=""
        ></img>
        <div className="h-100vh w-100vh bg-sky-950 rounded-3xl p-4  hover:bg-sky-900">
          <p className="text-xl sm:text-3xl my-3sm:my-3 text-center font-mono">
            Soften Technologies
          </p>
          <ul className="font-blinker text-lg sm:text-xl sm:px-4">
            <li>
              Successfully completed Python Django internship at Soften
              Technologies Kadavanthra, Cochin
            </li>
            <li>
              Conceptualized, designed, and developed a dynamic hospital online
              appointment booking website.
            </li>
            <li>From November 2022 to June 2023</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 sm:mx-10  text-white justify-center">
        <div className="h-100vh w-100vh bg-sky-950 rounded-3xl p-4 hover:bg-sky-900">
          <p className="text-xl sm:text-3xl sm:smy-3 text-center font-mono">
            Odox Softhub LLP
          </p>
          <ul className="font-blinker text-lg sm:text-xl sm:px-4">
            <li>
              Worked as a Python Odoo developer(intern) at Odox Softhub LLP,
              Cyberpark, Calicut
            </li>
            <li>
              Contributed to the development and implementation of a
              comprehensive hospital therapy management system.
            </li>
            <li>From December 2023 to March 2024</li>
          </ul>
        </div>
        <img
          className="max-w-md rounded-3xl hidden sm:flex"
          src="./assets/images/odox.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
