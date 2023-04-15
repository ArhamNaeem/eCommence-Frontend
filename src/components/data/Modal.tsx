import { motion } from "framer-motion";
import React, { useState } from "react";

type modalType = {
  category: string;
  type: string;
  color: string[];
  description: string;
  img_url: string;
  price: Record<string, string>;
  quantity: number;
  size: number[];
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = (props: modalType) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="absolute -left-5 top-0 bg-black w-full">
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className="flex items-center bg-white  absolute left-1/4 z-50 m-auto mt-16 p-3 h-[80vh] w-3/5 rounded-lg shadow-slate-800 shadow-2xl "
        >
          <button
            onClick={() => props.setClicked(clicked => false)}
            className="absolute top-2 z-50 text-3xl  text-slate-700  text-center  right-6"
          >
            &times;
          </button>

          <img src={props.img_url} alt="Sneaker" className=" w-2/5 rounded-lg"/>
          <div className=" w-1/2 absolute right-0 h-full">
            <h1 className=" tracking-wide text-5xl  mt-3 font-bold text-slate-400">
              {props.type}
            </h1>
            <p className="text-2xl font-semibold text-slate-400">
              {props.category}
            </p>
            <p className=" text-lg  mt-10 mb-2 text-slate-900 ">
              {props.description}
            </p>

            <div className="flex my-4 ">
              <div className="mt-4 border border-slate-500 rounded-full mr-2 bg-red-700 w-7 h-7" />
              <div className="mt-4 border border-slate-500 rounded-full mx-2 bg-blue-700 w-7 h-7" />
              <div className="mt-4 mx-2 rounded-full bg-white border border-slate-500 w-7 h-7" />
            </div>
            <div className="flex my-4">
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
            </div>
            <p className="text-3xl font-bold my-4 mt-6  text-slate-900 ">
              $500
            </p>
            <button className="absolute bottom-12 font-bold bg-slate-900 text-slate-300 rounded-lg p-2">
              ADD TO CART
            </button>

            <div className="absolute right-14 bottom-[3.2rem] ">
              {/* <p className="text-slate-900 text-sm font-semibold text-center">In Stock</p> */}
              <button
                onClick={() =>
                  quantity > 1 && setQuantity((quantity) => quantity - 1)
                }
                className="text-2xl font-bold"
              >
                &#8722;
              </button>
              <input
                defaultValue={1}
                // value={quantity}
                min={1}
                type="number"
                id="myNumberInput"
                className="w-20 py-1 mx-4 outline-none text-center   bg-slate-100"
              />
              <button
                onClick={() => setQuantity((quantity) => quantity + 1)}
                className="text-2xl font-bold"
              >
                &#43;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
