"use client";

import React, { useContext } from "react";

// import { motion } from "framer-motion";
import Link from "next/link";


// import { navVariants } from "../utils/motion";

const Navbar = () => {
  let state = JSON.parse(localStorage.getItem("loginState"));

  console.log(state);



  return (
    <>
      <nav
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
            <Link
              type=""
              href={state === "true" ? "/" : "/login"}
            >
              {state === "true" ? <img src={`https://api.dicebear.com/6.x/avataaars/svg`} alt="dp" className="border rounded-full w-12 h-12 p-1"/> :  <p className="border px-2">Login</p>}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
