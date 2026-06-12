"use client";
import { motion, stagger, useAnimate } from "motion/react";
import React, { useEffect } from "react";

const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      },
    );
  };
  const text =
    "The universe doesn't give you what you ask for with your thoughts; it gives you what you demand with your actions.Every expert was once a beginner who refused to quit.";
  return (
    <div
      ref={scope}
      className="mx-auto flex max-w-4xl flex-wrap content-center justify-center text-4xl font-bold text-white"
    >
      <button
        onClick={() => {
          startAnimating();
        }}
        className="rounded-lg bg-neutral-500 px-4 py-2 cursor-pointer active:scale-110"
      >
        Thought
      </button>
      {/* <motion.span
        style={{
          opacity: 0,
        }}
        className="inline-block"
      >
        {text}
      </motion.span> */}
      {text.split(" ").map((word, idx) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + idx}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
