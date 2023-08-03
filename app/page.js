'use client'

import "./globals.css";
import { Josefin_Sans, Outfit, Poppins } from "@next/font/google";
import { Inter } from "next/font/google";
import { TypingText } from "@/components/CustomTexts";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { planetVariants } from "@/utils/motion";
import Navbar from "@/components/Navbar";

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
    <motion.div
      className={` ${Jose.className}  main w-full  h-screen`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
    >
      <Navbar />
      <motion.div
        className="w-96 h-full  backdrop-blur-md flex flex-col border-r-2"
        variants={planetVariants("left")}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex space-x-3 p-6 justify-center"
        >
          <div className=" h-fit">
            <TypingText
              title="Woof"
              textStyles="text-center text-white  text-3xl"
            />
          </div>
          <div className="h-fit">
            <TypingText
              title="&"
              textStyles="text-center text-white  text-3xl"
            />
          </div>
          <div className="h-fit">
            <TypingText
              title="Whiskers"
              textStyles="text-center text-white  text-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="p-9 flex flex-col space-y-16 justify-center items-center"
        >
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-lg text-center text-white"
          >
            Every product is built from the ground up to protect your{" "}
            . We don't create user profiles, sell personal information or share
            data with third parties to use for marketing or advertising. And
            apps share only the information that you authorise.
          </motion.p>

          <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[148px] h-[28px] object-contain mt-[35px]"
          />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full h-full flex  text-white space-x-5 justify-center items-center"
        >
          <motion.a
            variants={fadeIn("up", "tween", 0.3, 1)}
            href="#_"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0">
            </span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black">
            </span>
            <span class="relative text-black group-hover:text-white">
              Adpot
            </span>
          </motion.a>

          <motion.a
            variants={fadeIn("up", "tween", 0.3, 1)}
            href="#_"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0">
            </span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black">
            </span>
            <span class="relative text-black group-hover:text-white">
              Register
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
