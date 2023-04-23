import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="dark:bg-gray-800  pt-[18%]  md:pt-[10%] lg:pt-[2%]">
      <div className="max-w-6xl mx-auto h-16 md:h-48  dark:bg-[transparent]">
        <h1 className=" text-2xl  md:text-4xl lg:text-6xl font-bold  md:py-20 text-center md:text-left relative">
          
          Some of My Work:
          <img src={'/work.gif'} alt="avatar" 
          className=" h-[40%] w-[40%] md:h-[40%] md:w-[40%] relative 
          left-[30%] bottom-[22%] md:left-[60%] md:bottom-[60%] lg:left-[60%] lg:bottom-[10rem]
          " 
          />
        </h1>
      </div>
      
      {/* Grid starts here */}
      <div className=" bg-[transparent] dark:bg-[transparent]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-5 gap-8 py-10 md:py-20 md:pb-40 content-center">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className=" w-full md:w-full block shadow-2xl p-4 ">
      <div className="relative overflow-hidden">
        <div className="h-55 md:h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-600 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-900 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
