"use client";

import { navVariants } from "@/utils/motion";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`py-4 border-b-2 border-t-gray-900 text-white   backdrop-blur-lg border-b-white `}
      >
        <div className="flex justify-around items-center">
          <div className="p-2">
            <h2>Logo</h2>
          </div>
          <div className="p-2">
            <ul className="flex space-x-5">
              <li>
                <Link href={""}>Home</Link>
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
            <Link type="" className="border px-2 py-2" href={"/login"}>
              {" "}
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
