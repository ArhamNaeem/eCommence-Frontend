import { motion } from "framer-motion";
import React from "react";

type modalType = {
  url: string;
  //   name: string;
  //   description: string;
  //   price: number | string;
  //   clicked: boolean;
};

const Modal = (props: modalType) => {
  return (
    <>
      {/* { */}
      {/* //   props.clicked ?( */}
      <div className="absolute -left-5 top-0 bg-black w-full">
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className="flex items-center bg-white  absolute left-1/4 z-50 m-auto mt-16 p-3 h-[80vh] w-3/5 rounded-lg shadow-slate-800 shadow-2xl "
        >
          <img src={props.url} alt="Sneaker" />
          <div className=" w-1/2 absolute right-0 h-full">
            <h1 className=" tracking-wide text-5xl mt-3 font-bold text-slate-400">
              Air Max 90
            </h1>
            <p className="text-2xl font-semibold text-slate-400">
              Men's Sneaker
            </p>
            <p className=" text-lg  mt-10 mb-2 text-slate-900 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              esse.
            </p>

            <p className="flex my-4 ">
              <div className="mt-4 border border-slate-500 rounded-full mr-2 bg-red-700 w-7 h-7" />
              <div className="mt-4 border border-slate-500 rounded-full mx-2 bg-blue-700 w-7 h-7" />
              <div className="mt-4 mx-2 rounded-full bg-white border border-slate-500 w-7 h-7" />
            </p>
            <p className="flex my-4">
              <div className="mt-4 border border-slate-200 rounded-lg w-9 h-9 text-center text-lg full mr-2">
                39
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                {" "}
                40{" "}
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                {" "}
                38{" "}
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                {" "}
                41{" "}
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                42{" "}
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                43
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                44
              </div>
              <div className="mt-4 border border-slate-200 rounded-lg  w-9 h-9 text-center text-lg full mr-2">
                45
              </div>
            </p>
            <p className="text-2xl font-bold my-4 text-slate-900 ">$500</p>
            <button className="absolute bottom-12 font-bold bg-slate-900 text-slate-300 rounded-lg p-2">
              ADD TO CART
            </button>

            <div className="absolute right-10 bottom-14">
              <p className="text-slate-900 text-sm font-semibold text-center">In Stock</p>
              <select name="qty" className="rounded-lg outline-none text-lg mx-5 border border-slate-800 w-20 px-3">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
