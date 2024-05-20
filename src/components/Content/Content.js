import React from "react";

export default function Content() {
  const name = "I am Midhlaj Basheer";
  const about =
    "As a passionate and dedicated Full Stack Developer, I specialize in creating dynamic and user-friendly web applications. With proficiency in,";
  const position = "Web Developer";
  return (
    <>
      <div
        id="home"
        className="flex flex-col-reverse items-center pt-[60px] sm:pt-[90px] text-white justify-around sm:flex-row xs:flex-row px-6 pb-14 sm:pb-0 xs:pt-[90px]"
      >
        <div className="h-[25rem] xs:w-[410px] sm:w-[410px] text-center pt-5 sm:text-start xs:text-start">
          <h1 className="text-2xl font-blinker font-semibold">{name}</h1>
          <h3 className="text-5xl sm:text-7xl font-jersey ">{position}</h3>
          <div className="text-xl mt-2 mb-5 xs:mb-3 sm:mb-2 font-blinker">
            {about}
          </div>
          <div className="flex flex-wrap justify-center xs:justify-start items-center sm:flex-nowrap sm:justify-normal sm:ml-13 gap-5 sm:mb-7">
            <img
              className="hover:scale-125 h-[40px] sm:h-[50px] duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              alt=""
            />
            <img
              className="hover:scale-125 w-[40px] h-[50px] sm:w-[50px] sm:h-[50px] duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt=""
            />
            <img
              className="hover:scale-125 h-[40px] sm:h-[50px]  duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt=""
            />
            <img
              className="hover:scale-125 h-[40px] sm:h-[50px]  duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
              alt=""
            />
            <img
              className="hover:scale-125 h-[40px] sm:h-[50px]  duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
              alt=""
            />
            <img
              className="hover:scale-125 h-[40px] sm:h-[50px]  duration-300"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt=""
            />
            <img
              className="hover:scale-125 h-[70px] bg-red duration-300"
              src="./assets/images/content/django.png"
              alt=""
            />
          </div>
          <button class="bg-gradient-to-r from-red-900 to-orange-950 rounded-3xl border-[1px] border-black text-center px-3 py-1.5 font-cuprum text-xl hover:border-white transition duration-300 xs:mt-2">
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
            className=" inset-0 bg-gradient-to-r from-transparent from-20% via-red-900 to-orange-950 rounded-[9rem] "
            src="./assets/images/content/paul-walker.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
