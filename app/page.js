"use client";

import Navbar from "@/components/Navbar";
import Head from "next/head";
import "./globals.css";
import { Josefin_Sans, Outfit, Poppins } from "@next/font/google";
import { Inter } from "next/font/google";
import { TypingText } from "@/components/CustomTexts";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const Jose = Josefin_Sans({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-jose",
  display: "swap",
});

const Popins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-pop",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={` ${Popins.className}  main w-full  h-screen`}>
      <Navbar />
     <div className="w-full h-full border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="border border-black  flex-col p-6 justify-center"
      >
        <div className="border h-fit">
          <TypingText
            title="Woof"
            textStyles="text-center text-white  text-2xl"
          />
        </div>
        <div className="border h-fit">
          <TypingText
            title="&"
            textStyles="text-center text-white  text-2xl"
          />
        </div>
        <div className="border h-fit">
          <TypingText
            title="Whiskers"
            textStyles="text-center text-white  text-2xl"
          />
        </div>
      </motion.div>
    </div>
    </div>
  );
}
