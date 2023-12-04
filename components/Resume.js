import React from "react";

export default function Resume() {
  return (
    <section className="dark:bg-gray-800  pt-[1%]  md:pt-[1%] lg:pb-[2%]">
      <div className="max-w-6xl mx-auto  dark:bg-[transparent] ">
        <h1 className=" text-xl md:text-4xl lg:text-4xl font-bold  text-center md:text-left relative">
          Hey there!
          <a
            href="./Aanchal-Sahu-Resume.pdf"
            download="Aanchal-Sahu-Resume.pdf"
          >
            <button
              className=" bg-blue-300 shadow-lg shadow-blue-500/50 ml-10 
           hover:bg-blue-800 hover:text-blue-100 border-sky-900
           text-sm md:text-md lg:text-xl rounded p-2 md:p-3 "
            >
              Download Resume
            </button>
          </a>
        </h1>
      </div>

      {/* Grid starts here */}
      <div className="  dark:bg-[transparent]  mt-[10%] md:mt-[2%]">
        <div className="max-w-6xl mx-auto w-screen">
          <h2 className="text-lg mb-10">Preview:</h2>
          <embed
            src="./Aanchal-Sahu-Resume.pdf"
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
          ></embed>
        </div>
      </div>
    </section>
  );
}
