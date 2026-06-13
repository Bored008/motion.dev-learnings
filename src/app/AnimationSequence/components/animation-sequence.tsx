"use client";
import React from "react";
import { motion, useAnimate } from "motion/react";

const AnimationSequence = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
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
        className="via-voilet-600 h-20 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-medium text-white"
      >
        <span className="text">Purchase Now ($169)</span>
      </motion.button>
      <motion.div
        style={{ opacity: 0, scale: 0 }}
        className="spinning-circle absolute inset-0 m-auto h-20 w-20 rounded-full bg-green-500"
      ></motion.div>
    </div>
  );
};

export default AnimationSequence;
