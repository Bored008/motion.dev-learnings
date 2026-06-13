"use client";
import React from "react";
import { motion, useAnimate } from "motion/react";
import { div } from "motion/react-client";

const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    animate(
      ".loader",
      {
        opacity: 1,
        width: "2rem",
      },
      {
        duration: 0.1,
      },
    );

    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      },
    );

    animate(
      ".text",
      {
        opacity: 0,
      },
      {
        duration: 0,
      },
    );

    await animate(
      "button",
      {
        borderRadius: "1000px",
        width: "5rem",
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
      },
      {
        duration: 0.3,
      },
    );

    animate(
      ".spinning-circle",
      {
        opacity: 1,
        scale: [0, 1.2, 0.8, 1],
      },
      {
        duration: 0.5,
      },
    );

    animate(
      ".check-icon",
      {
        opacity: 1,
        scale: [0, 1.2, 0.8, 1],
      },
      {
        duration: 0.5,
      },
    );

    animate(
      ".check-icon-path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      },
    );
  };
  return (
    <div
      ref={scope}
      className="relative flex h-20 min-h-screen w-full items-center justify-center bg-neutral-900"
    >
      <motion.button
        onClick={startAnimating}
        style={{
          width: "30rem",
        }}
        className="via-voilet-600 h-20 flex justify-center items-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-medium text-white"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <span className="text">Purchase Now ($169)</span>
      </motion.button>

      <motion.div
        style={{
          opacity: 0,
          scale: 0,
          backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
        }}
        className="spinning-circle absolute inset-0 m-auto h-20 w-20 rounded-full"
      ></motion.div>
      <motion.svg
        fill="none"
        viewBox="0,0,24,24"
        stroke="#FFFFFF"
        strokeWidth={3}
        className="check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
        style={{
          opacity: 0,
        }}
      >
        <motion.path
          className="check-icon-path"
          initial={{
            pathLength: 0,
          }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeOut",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></motion.path>
      </motion.svg>
    </div>
  );
};

export default AnimationSequence;
