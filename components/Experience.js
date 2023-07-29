import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className=" dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-16 md:h-48  dark:bg-[transparent] ">
        <h1 className=" text-2xl  md:text-4xl lg:text-4xl font-bold md:py-20 text-center md:text-left relative">
          My Journey
          {/* Some of My Work: */}
          <img
            src={"/experience.svg"}
            alt="avatar"
            className=" h-[40%] w-[30%] md:h-[40%] md:w-[20%] relative 
          left-[33%] bottom-[1%] md:left-[60%] md:bottom-[60%] lg:left-[75%] lg:bottom-[6rem]
          "
          />
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 mt-[15%]">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto py-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-gray-900 dark:bg-gray-200 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-black rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
//   animate-pulse
const ExperienceCard = ({ title, desc, year, company, companyLink, key }) => {
  return (
    <div
      key={key}
      className="relative experience-card border p-4 rounded-md shadow-xl bg-[#75c1f8] dark:bg-gray-800 z-10 mx-4"
    >
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-500 font-bold dark:text-gray-500 ">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-black-700">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
