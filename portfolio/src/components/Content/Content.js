import React from "react";

export default function Content() {
  const name = "I am Midhlaj Basheer";
  const about =
    "As a passionate and dedicated Full Stack Developer, I specialize in creating dynamic and user-friendly web applications. With proficiency in Python, JavaScript, Django, React, HTML, and CSS, I possess a comprehensive skill set to bring your digital ideas to life.";
  const position = "Web Developer";
  return (
    <>
      <div className="flex items-center mt-10 text-white justify-between sm:flex-row flex-col-reverse">
        <div className="h-[25rem] sm:w-[380px] text-center">
          <h1 className="text-2xl font-serif font-bold">{name}</h1>
          <h3 className="text-6xl font-kt font-normal">{position}</h3>
          <div className="text-lg mt-2">{about}</div>
          <button className="bg-cyan-800 rounded-full text-center px-3 py-1.5">
            Instagram
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
