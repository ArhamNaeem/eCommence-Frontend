import { motion } from "framer-motion";
import React from "react";
import Logo from "../../utils/Logo";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <>
      <div className="relative flex h-vh-80 w-full bg-black">
        <section className=" w-1/2 h-5/6 flex flex-col items-center">
          <div className="flex">
            <Logo height={80} width={80}
              mr={8} mt={8} ml={0} mb={0} textMarginTop={12}
            textSize = {'6xl'}
            />
          </div>
          <p className="text-white ml-36 text-sm">
            ULTIMATE SHOPPING DESTINATION
          </p>
          <button className="h-1/5 w-1/2 mt-16  rounded-lg font-semibold transition-all duration-300 hover:bg-slate-200 bg-white ">
            Shop Now!
          </button>
          {/* make it scroll on top */}
          <button className="text-white absolute bottom-20 opacity-70 text-lg "
            onClick={() => {
          
              window.scrollTo({
                top: 0,
                behavior:"smooth"
              })
            }}
          >
            
            Scroll to top
          </button>
        </section>

        <section className="mt-7  flex flex-col justify-center h-5/6 w-1/2 text-white p-12  text-4xl font-bold">
          <h1 className=" border-l-8 ml-10 border-slate-400 pl-3 ">OVERVIEW</h1>
          <ul className="flex flex-col w-1/2 text-center  justify-center h-full ">
            <li className="my-4 hover:scale-105 transition-all duration-300">
              <button> WHO ARE WE </button>
            </li>
            <li className="my-4 hover:scale-105 transition-all duration-300">
              <button> CONTACT </button>
            </li>
            <li className="my-4 hover:scale-105 transition-all duration-300">
              OUR POLICIES
            </li>
            <li className="my-4 hover:scale-105 transition-all duration-300">
              
            </li>
          </ul>
        </section>

        <footer className=" absolute bottom-5 text-3xl left-1/3 text-white">
          Copyright &#169; {getYear()}. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Footer;
