"use client";
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link';

const page = () => {
  return (
    <div className="[perpective:[1000px]] [transform-style:preserve-3d] flex h-screen w-full flex-1 items-center justify-center font-sans bg-neutral-900"
    style={{backgroundImage:'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)',
      backgroundSize:"8px 8px",
      backgroundRepeat:"repeat"
    }}
    >
      <Link href={"/"} className="absolute top-10 left-10 text-white bg-black px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors backdrop-blur-md">←  Back to Home</Link>
      <motion.button
      whileHover={{
        // rotateX:20,
        // rotateY:20,
        boxShadow:"0px 20px 50px rgba(8,112,184,0.7)",
        y:-5
      }}

      whileTap={{
        y:0
      }}
      
      initial={{rotate:0,}}
      animate={{rotate:[0, 20, 0],}}
      transition={{
        duration:0.3,
        ease:"easeInOut"
      }}
      style={{
        translateZ:100,
      }}
      className="group relative text-2xl text-neutral-200 bg-black px-12 py-4 rounded-xl shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)
      _inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
        <span className="group-hover:text-cyan-500 transition-color duration-300">Subscribe</span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto">
        </span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm">
        </span>
      </motion.button>
    </div>
  )
}

export default page