import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="flex flex-col justify-center font-semibold bg-black opacity-60 z-50 h-14 backdrop-blur-3xl rounded-xl rounded-t-none pb-2 shadow-md"
      >
        <ul className="flex justify-center text-white">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-2  transition-colors hover:text-slate-400 hover:scale-105 "
          >
            Home
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-2  transition-colors hover:text-slate-400 hover:scale-105"
          >
            Store
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="ml-2 mr-4  transition-colors hover:text-slate-400 hover:scale-105"
          >
            About
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className=" transition-colors hover:text-slate-400 hover:scale-105"
          >
            Contact Us
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
