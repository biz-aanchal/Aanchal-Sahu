import React, { useCallback, useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import ReactCanvasConfetti from "react-canvas-confetti";
import Projects from "./Projects";

export default function Hero() {
  // const colors_hey = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const colors_hey = ["rgb(117 191 255 / 50%)", "rgb(238 252 72 / 61%)", "#ff77b6b0", "#3B82F6"];
  const [fire, setFire] = useState(false);
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const myTimeout = setTimeout(myGreeting, 3000);

  function myGreeting() {
    setFire(false)
    stopAnimation()
  }

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
    <div className="justify-center flex flex-col md:flex-row my-5 md:my-10 text-center" onClick={() => { setFire(!fire) }}>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} colors={['#A020F0']} />

      {/* Text container*/}
      <div className="mx-auto text-center md:text-center px-4 lg:p-20 ">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors_hey[0]}>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 my-0 md:my-2 px-5 ">
              Hey! I'm Aanchal.
            </h3>
          </RainbowHighlight>
          {/* <RainbowHighlight color={colors_hey[0]}>
            <h3 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 my-2 px-5 ">
           (Software Developer)
            </h3>
          </RainbowHighlight> */}
          <RainbowHighlight color={colors_hey[0]}>
            <h1 className="text-md md:text-xl font-400 text-black dark:text-white my-5">
           A Working Professional (Software Developer) since 2021 & A Learner Since Always.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className=" lg:block  lg:w-1/2 md:w-1/2  flex justify-center text-center self-center ">

        <div className=" border-spacing-7 border-l-pink-7 self-center flex flex-col items-center">
          <img src={userData.avatarUrl} alt="avatar" 
          className="shadow shadow-slate-900 dark:shadow-slate-200 h-[40%] w-[40%] md:h-[50%] md:w-[50%]  rounded-full profile-image" />
          {/* {/* <img src={userData.avatarUrl} alt="avatar" className=" shadow rounded-full  border-t-8 border-b-8 border-t-pink-700 border-b-red-500" />  */}
          {/* <div className="flex flex-row justify-center md:justify-between mt-4 md:ml-24 ">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div> */}
        </div>
      </div>


    </div>
    <Projects/>
    </>
  );
}

//INFO: following functions are for the confetti

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
}
