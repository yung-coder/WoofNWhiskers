"use client";

import RegisterPage from "./RegisterPage";
import "../globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { planetVariants, staggerContainer } from "@/utils/motion";

export default async function page() {
  return (
    <>
      <motion.div
        className="mainreg  bg-gray-100 flex flex-col space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
      >
        <Header />
        <motion.div
          className="w-full h-full p-6"
          variants={planetVariants("left")}
        >
          <RegisterPage />
        </motion.div>
      </motion.div>
    </>
  );
}
