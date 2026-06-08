"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href='/Hoverbutton'>Hover button</Link>
      <Link href='/Cardhover'>Card Hover</Link>
    </div>
  );
}
