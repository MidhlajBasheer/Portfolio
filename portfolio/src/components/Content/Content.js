import React from "react";

export default function Content() {
  const name = "I am Midhlaj Basheer";
  const about =
    "As a passionate and dedicated Full Stack Developer, I specialize in creating dynamic and user-friendly web applications. With proficiency in Python, JavaScript, Django, React, HTML, CSS and Tailwind CSS. I possess a comprehensive skill set to bring your digital ideas to life.";
  const position = "Web Developer";
  return (
    <>
      <div
        id="home"
        className="flex flex-col-reverse items-center pt-[60px] sm:pt-[90px] text-white justify-around sm:flex-row"
      >
        <div className="h-[25rem] sm:w-[410px] text-center pt-5 sm:text-start">
          <h1 className="text-2xl font-blinker font-semibold">{name}</h1>
          <h3 className="text-5xl sm:text-7xl font-jersey">{position}</h3>
          <div className="text-xl mt-2 mb-2 font-blinker sm:pb-5">{about}</div>
          <button className="bg-gradient-to-r from-red-950 to-blue-950  rounded-3xl border-2 border-black text-center px-3 py-1.5 font-cuprum text-xl hover:border-white transition duration-300 ">
            <a
              href="/assets/files/Midhlaj-Basheer.pdf"
              download="Midhlaj Basheer.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div>
          <img
            className="h-auto w-auto bg-black rounded-[9rem]"
            src="./assets/images/paul-walker.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
