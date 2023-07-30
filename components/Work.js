import React from "react";
import userData from "@constants/data";
import Projects from "./Projects";

export default function Work() {
  return (
    <section className=" dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-16 md:h-48  dark:bg-[transparent]">
        <h1 className=" text-2xl  md:text-4xl lg:text-4xl font-bold  md:py-20 text-center md:text-left relative">
          Tech Stack
          <img
            src={"/teckstack.svg"}
            alt="avatar"
            className=" h-[40%] w-[20%] md:h-[40%] md:w-[25%] relative 
          left-[40%] bottom-[1%] md:left-[60%] md:bottom-[60%] lg:left-[72%] lg:bottom-[9rem] "
          />
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 mt-[15%] md:mt-[1%]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-7 p-10 md:py-20 ">
          {userData.techStack.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <Projects />
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className=" w-full md:w-full block shadow-2xl p-4 ">
      <div className="relative overflow-hidden">
        <div className="h-55 md:h-52 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-800 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
