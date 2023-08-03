import React from "react";


import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`py-4 border-b-2 border-t-gray-900 text-white flex justify-center items-center  backdrop-blur-3xl border-b-white `}
    >
       <div>
          <h1>Register Your Pet</h1>
       </div>
    </motion.nav>
  );
};

export default Header;
