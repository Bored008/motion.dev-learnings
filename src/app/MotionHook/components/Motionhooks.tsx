"use client";
import React from "react";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";

const Motionhooks = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="flex flex-col gap-10 ">
        {}
      </div>
    </div>
  );
};

type Feature = {
  icon:React.ReactNode;
  title:string;
  description:string;
  content:React.ReactNode;
}

const features = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Replicate great Art",
    description:
      "Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.",
    content: (
      <Image
        src="https://assets.aceternity.com/pro/art.jpeg"
        alt="car"
        height="500"
        width="500"
        className="rounded-lg"
      />
    ),
  },
];


export default Motionhooks;
