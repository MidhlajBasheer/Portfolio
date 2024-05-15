import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="pt-7 sm:pb-2 mb-10 sm:mb-20 px-2 sm:px-0">
      <h1 className="text-center sm:text-start font-blinker text-2xl sm:ml-10 mb-3 sm:text-3xl sm:mb-6 text-white">
        Professional Experience
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 sm:mx-10 sm:mb-10 text-white mb-4 justify-center ">
        <img
          className="max-w-md rounded-3xl hidden sm:flex"
          src="./assets/images/experience/soften.jpg"
          alt=""
        ></img>
        <div className="h-100vh w-fit bg-gradient-to-r from-red-900  via-red-950 to-black hover:to-transparent rounded-3xl p-4  hover:bg-yellow-700	">
          <p className="text-xl sm:text-2xl my-3sm:my-3 text-center font-mono">
            Soften Technologies
          </p>
          <ul className="font-blinker text-lg sm:text-xl sm:px-4 ">
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
        <div className="h-100vh w-100vh inset-0 bg-gradient-to-r from-black via-red-950 to-red-900 hover:to-transparent rounded-3xl p-4  hover:bg-yellow-700	">
          <p className="text-xl sm:text-2xl sm:smy-3 text-center font-mono">
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
          src="./assets/images/experience/odox.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
