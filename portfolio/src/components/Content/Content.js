import React from "react";

export default function Content() {
  const name = "I am Midhlaj Basheer";
  const about =
    "As a passionate and dedicated Full Stack Developer, I specialize in creating dynamic and user-friendly web applications. With proficiency in Python, JavaScript, Django, React, HTML, and CSS, I possess a comprehensive skill set to bring your digital ideas to life.";
  const position = "Web Developer";
  return (
    <>
      <div className="flex items-center mt-10 text-white justify-between pr-[6rem] pl-20">
        <div className="flex items-start flex-col h-[25rem] w-[30rem] gap-2 justify-center">
          <h1 className="text-2xl font-serif font-bold">{name}</h1>
          <h3 className="text-6xl font-kt font-normal">{position}</h3>
          <p className="w-[90%] text-lg">{about}</p>
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
