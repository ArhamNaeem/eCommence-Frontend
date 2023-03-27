import { motion } from "framer-motion";
import React from "react";
import { useSellerThoughts } from "../../../hooks/useSellerThoughts";

const SellersThoughts = () => {
  const { addRotation, removeRotation } = useSellerThoughts();
  return (
    <>
      <div className="h-screen flex items-center justify-between text-5xl bg-black bg-opacity-10 ">
        <div className="h-full text-white left-10 w-1/3 text-center text-7xl font-bold text-shadow-200">
          <div className="relative h-full flex items-center flex-wrap">
            <h1 className="hidden lg:block absolute text-shadow-white-200  left-2/3 text-black text-2xl -transform -rotate-90 w-max ">
              <span className="line line-before"></span>
              What do our sellers say?
              <span className="line line-after"></span>
            </h1>
            <div className="lg:hidden absolute top-1 flex items-center justify-center w-screen p-2">
              <hr className="border border-gray-600  flex-grow mr-2 " />
              <h1 className=" text-shadow-white-200 text-center text-black text-lg  ">
                What do our sellers say
              </h1>
              <hr className="border border-gray-600 flex-grow ml-2" />
            </div>
            <motion.div
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:bg-slate-900 lg:p-10 lg:items-center lg:w-full  lg:h-full  lg:text-white lg:font-bold lg:text-7xl hidden lg:flex lg:flex-col lg:justify-center "
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
          <div
            className=" w-1/2 h-1/3 lg:w-1/3 absolute -left-20 sm:-left-32 md:-left-44 lg:left-14 top-24 lg:top-12"
            onMouseEnter={() => addRotation("firstDiv")}
            onMouseLeave={() => removeRotation("firstDiv")}
          >
            <div className=" firstDiv  transition-transform duration-500 h-full w-full absolute rounded-xl -rotate-12 bg-slate-700" />
            <div className="shadow-2xl p-2 flex items-center shadow-black h-full w-full absolute rounded-xl skew-x-3 border border-slate-700 bg-white text-slate-700">
              <p className="absolute h-0 text-6xl lg:text-8xl -top-1 ">
                &#8220;
              </p>
              <p className=" h-4/5  overflow-auto  flex items-center text-center text-sm">
                The website's user-friendly interface and robust analytics tools
                have made it easy for me to manage my inventory, track my sales,
                and make data-driven decisions to grow my business.
              </p>
              <p className="bottom-8 lg:bottom-14 absolute right-3 h-0 text-6xl lg:text-8xl">
                &#8221;
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => addRotation("secDiv")}
            onMouseLeave={() => removeRotation("secDiv")}
            className="w-1/2 h-1/3 lg:w-1/3 absolute right-8 lg:right-10 top-72 lg:top-36"
          >
            <div className="secDiv transition-transform duration-500 h-full w-full absolute  rounded-xl -rotate-12  bg-slate-800" />
            <div className="shadow-2xl p-2  flex items-center shadow-black  h-full w-full absolute rounded-xl skew-x-3  border border-slate-800 bg-white text-slate-800">
              <p className="absolute h-0 text-6xl lg:text-8xl -top-1  ">
                &#8220;
              </p>
              <p className="h-4/5  flex overflow-auto items-center text-center text-sm  mt-1">
                Partnering with VibeKart has been a game-changer for my
                business. Since joining the platform, I've seen a significant
                increase in sales and have been able to reach a much wider
                audience.
              </p>
              <p className=" bottom-8 lg:bottom-14 absolute right-3 h-0 text-6xl lg:text-8xl">
                &#8221;
              </p>
            </div>
          </div>

          <div
            onMouseEnter={() => addRotation("thirdDiv")}
            onMouseLeave={() => removeRotation("thirdDiv")}
            className=" w-1/2 h-1/3 lg:w-1/3  absolute  -left-8  lg:left-1/4 bottom-12 lg:bottom-20"
          >
            <div className=" thirdDiv transition-transform duration-500  h-full w-full absolute  rounded-xl -rotate-12  bg-slate-600" />
            <div className=" shadow-2xl flex items-center shadow-black h-full w-full absolute rounded-xl skew-x-3  border border-slate-600 p-2 bg-white text-slate-600">
              <p className="absolute h-0 text-6xl lg:text-8xl -top-1  ">
                &#8220;
              </p>
              <p className="h-4/5 flex overflow-auto items-center text-center text-sm  mt-1">
                Overall, I'm extremely happy with my experience on VibeKart.
                It's been a valuable partner in helping me grow my business.
              </p>
              <p className="bottom-8 lg:bottom-14 absolute right-3 h-0 text-6xl lg:text-8xl">
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
