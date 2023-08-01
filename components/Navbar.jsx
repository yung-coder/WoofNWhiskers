"use client";

import { navVariants } from "@/utils/motion";
import React from "react";
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`py-4 text-white  backdrop-blur-md border-t-0  border-b-gray-200 `}
      >
        <div className="flex justify-around p-2">
          <div>
            <h2>Logo</h2>
          </div>
          <div>
            <ul className="flex space-x-5">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2 ">
            <button type="">Login</button>
            <button type="">Register</button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
