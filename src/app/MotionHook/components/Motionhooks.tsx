"use client";
import React, { useRef, useState } from "react";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import { div } from "motion/react-client";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const Motionhooks = () => {
  const [bgColor, setBgColor] = useState("#232323");

  const backgrounds = ["#232323", "#926c15", "#14452f"];

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
      }}
      className="flex min-h-screen items-center justify-center bg-neutral-900 text-white"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, idx) => (
          <Card
            key={feature.title}
            feature={feature}
            bg={backgrounds[idx]}
            setBgColor={setBgColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({
  feature,
  bg,
  setBgColor,
}: {
  feature: Feature;
  bg: string;
  setBgColor: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], [10, 5, 0, 5, 10]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.4 && latest < 0.6) {
      setBgColor(bg);
    }
    console.log("changed value", latest);
  });

  return (
    <div
      ref={ref}
      key={feature.title}
      className="items-cen grid grid-cols-2 gap-20 py-80"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

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
