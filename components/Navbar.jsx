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
        className={`py-5  border border-black`}
      >
        <div className="flex justify-between p-1">
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
          <div>
            <div>
              <button type="">Login</button>
              <button type="">Register</button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
