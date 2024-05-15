import React from "react";

export default function Project() {
  return (
    <>
      <div
        id="projects"
        className="sm:mt-1 sm:px-10 h-fit w-100vh text-white px-2"
      >
        <h1 className="text-center sm:text-start font-blinker text-3xl mb-3">
          Projects
        </h1>
        <div className="h-full w-full font-blinker bg-gradient-to-r from-red-950 to-black rounded-3xl text-center text-2xl ">
          <div className="flex xs:flex-row sm:flex-row flex-col sm:mt-4 items-center p-3">
            <img
              className="rounded-3xl sm:ml-3 sm:my-3 sm:w-[350px] sm:h-auto h-[200px] w-10%"
              src="./assets/images/projects/job-searching.jpg"
              alt=""
            ></img>
            <div className=" flex flex-col justify-center ">
              <h1 className="text-2xl sm:text-3xl my-2">
                JobQ.com: Job-hunting website
              </h1>
              <p className="text-xl flex items-center sm:text-start xs:pl-3 sm:pl-5 text-center ">
                Developed JOBQ.com, a dynamic web platform facilitating job
                seekers and employers to connect seamlessly. Implemented user
                authentication and verification features to ensure reliability
                and security. Admin-managed skill verification system to
                showcase qualified job seekers to employers, enabling efficient
                booking according to their requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full font-blinker bg-gradient-to-r from-red-950 to-black rounded-3xl text-center text-2xl">
          <div className="sm:flex-row xs:flex-row flex flex-col mt-4 items-center p-3">
            <img
              className="rounded-xl sm:ml-3 sm:my-3 sm:w-[350px] sm:h-auto h-[200px] w-10%"
              src="./assets/images/projects/hospital.png"
              alt=""
            ></img>
            <div className="flex flex-col justify-center ">
              <h1 className="text-2xl sm:text-3xl my-2">
                Therapy Management System
              </h1>
              <p className="text-xl flex items-center sm:text-start sm:pl-5 xs:pl-5 text-center ">
                Developed JOBQ.com, a dynamic web platform facilitating job
                seekers and employers to connect seamlessly. Implemented user
                authentication and verification features to ensure reliability
                and security. Admin-managed skill verification system to
                showcase qualified job seekers to employers, enabling efficient
                booking according to their requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
