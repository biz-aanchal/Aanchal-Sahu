import React, { useCallback, useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import ReactCanvasConfetti from "react-canvas-confetti";
import Projects from "./Projects";

export default function Hero() {
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
    <div className="justify-center flex flex-col md:flex-row  my-5 md:my-10 text-center" onClick={() => { setFire(!fire) }}>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} colors={['#A020F0']} />

      {/* Text container*/}
      <div className="mx-auto text-center md:flex-1 md:text-left px-4 lg:p-20 ">
            <h5 className="text-xs md:text-sm text-gray-900 dark:text-gray-200 my-0 md:my-2">
              Hi there, I'm Aanchal. 
            </h5>
            <h1 className="text-md md:text-xl font-400 text-black dark:text-white my-1">
             I'm a frontend developer with two years of hands-on experience working with a startup company. 
           I've actively contributed to live projects, adding a practical edge to my skillset. 
           Since 2021, I've been immersed in the world of software development, 
           cherishing both the learning journey and the outcomes.
            </h1>
      </div>
      {/* Image container */}
      <div className=" lg:block  lg:w-1/2 md:w-1/2 md:flex-8  flex justify-center text-center self-center ">

        <div className=" border-spacing-7 border-l-pink-7 self-center flex flex-col items-center">
          <img src={userData.avatarUrl} alt="avatar" 
          className="shadow shadow-slate-900 dark:shadow-slate-200 h-[40%] w-[40%] md:h-[50%] md:w-[50%]  rounded-full profile-image" />
         
        </div>
      </div>


    </div>
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
