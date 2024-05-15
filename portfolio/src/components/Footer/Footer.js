import React from "react";

export default function Experience() {
  const handleMouseOver = (index) => {
    const images = document.querySelectorAll(".icon");
    images.forEach((image, i) => {
      if (i === index) {
        image.style.opacity = "1";
        image.style.transform = "scale(1.2)";
        image.style.transition = "all 0.3s ease";
      } else {
        image.style.opacity = "0.6";
        image.style.transform = "scale(0.8)";
        image.style.transition = "all 0.3s ease";
      }
    });
  };

  const handleMouseLeave = () => {
    const images = document.querySelectorAll(".icon");
    images.forEach((image) => {
      image.style.opacity = "1";
      image.style.transform = "scale(1)";
      image.style.transition = "all 0.3s ease";
    });
  };

  return (
    <div id="footer" className="sm:mt-1 bg-white text-center sm:pb-5">
      <div className="flex font-blinker justify-center text-2xl text-black sm:text-3xl pt-2 sm:pt-5 gap-2 pb-1 sm:pb-0 sm:gap-3 items-center">
        Get in Touch
        <img
          className=" h-10 ml-1sm:ml-2 w-10"
          src="./assets/images/footer/connect.png"
          alt=""
        />
      </div>
      <div
        className="inline-flex sm:h-10 sm:mt-5 mb-4 sm:mb-0 gap-6"
        onMouseLeave={handleMouseLeave}
      >
        <a href="https://github.com/MidhlajBasheer">
          <img
            src="./assets/images/footer/github.png"
            alt=""
            className="icon h-7 sm:h-10"
            onMouseOver={() => handleMouseOver(0)}
          />
        </a>
        <a href="https://www.linkedin.com/in/midhlaj-basheer">
          <img
            src="./assets/images/footer/linkedin.png"
            alt=""
            className="icon h-7 sm:h-10 "
            onMouseOver={() => handleMouseOver(1)}
          />
        </a>
        <a href="https://www.instagram.com/midhlaj.basheer?igsh=M3VoMWtydGtnbm1t">
          <img
            src="./assets/images/footer/instagram.png"
            alt=""
            className="icon h-7 sm:h-10"
            onMouseOver={() => handleMouseOver(2)}
          />
        </a>
        <a href="/">
          <img
            src="./assets/images/footer/gmail.png"
            alt=""
            className="icon h-7 sm:h-10 "
            onMouseOver={() => handleMouseOver(3)}
          />
        </a>
      </div>
    </div>
  );
}
