import { motion } from "framer-motion";
import React from "react";

const SellersThoughts = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-between text-5xl bg-black bg-opacity-10 ">
        <div className="h-full text-white left-10 w-1/3 text-center text-7xl font-bold text-shadow-200">
          <div className="relative h-full flex items-center flex-wrap">
            <h1 className="absolute text-shadow-white-200 left-64 text-black text-2xl - transform -rotate-90 w-max ">
              <span className="line line-before"></span>
              What do our sellers say?
              <span className="line line-after"></span>
            </h1>
            <motion.div
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className=" bg-slate-900 p-10 items-center w-full  h-full  text-white font-bold text-7xl flex flex-col justify-center "
            >
              <h1 className="text-5xl">TEAMWORK</h1>
              <h1 className="text-3xl">COLLABORATION</h1>
              <h1>&</h1>
              <h1 className="text-6xl">MUTUAL</h1>
              <h1>SUCCESS</h1>
            </motion.div>
          </div>
        </div>
        <div className="relative h-full w-full ">
          <div className=" h-1/3  w-1/3 absolute left-14 top-12">
            <div className=" h-full w-full absolute  rounded-xl -rotate-12  bg-slate-700" />
            <div className="shadow-2xl shadow-black h-full w-full absolute  rounded-xl skew-x-3  border border-slate-700 bg-white">
              <p className="m-3 text-8xl text-slate-700">&#8220;</p>

              <p className=" absolute right-3 m-3 text-8xl text-slate-700">
                &#8221;
              </p>
            </div>
          </div>

          <div className="h-1/3 w-1/3 absolute right-10 top-36">
            <div className=" h-full w-full absolute  rounded-xl -rotate-12  bg-slate-800" />
            <div className="shadow-2xl shadow-black h-full w-full absolute rounded-xl skew-x-3  border border-slate-800 bg-white">
              <p className="m-3 text-8xl text-slate-800">&#8220;</p>

              <p className=" absolute right-3 m-3 text-8xl text-slate-800">
                &#8221;
              </p>
            </div>
          </div>

          <div className="  h-1/3 w-1/3 absolute  left-1/4 bottom-10">
            <div className="  h-full w-full absolute  rounded-xl -rotate-12  bg-slate-600" />
            <div className=" shadow-2xl shadow-black h-full w-full absolute rounded-xl skew-x-3  border border-slate-600 bg-white">
              <p className="m-3 text-8xl text-slate-600">&#8220;</p>

              <p className=" absolute right-3 m-3 text-8xl text-slate-600">
                &#8221;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellersThoughts;
