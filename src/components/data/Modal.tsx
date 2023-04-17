import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from "react";

type modalType = {
  category: string;
  cloth_type?: string;
  shoe_type?: string;
  color: string[];
  description: string;
  img_url: string;
  price: Record<string, string>;
  quantity: number;
  size: number[];
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = (props: modalType) => {
  const clothSize: Record<number, string> = {
    1: "S",
    2: "M",
    3: "L",
    4: "XL",
    5: "XXL",
  };

  const [quantity, setQuantity] = useState(1);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setQuantity(1);
      return;
    }
    if (parseInt(value) >= props.quantity) {
      setQuantity(props.quantity);
      return;
    }
    setQuantity(parseInt(value));
  };


  return (
    <>
      <div
        className={`fixed top-0 -left-5 bg-black w-full`}
      >
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className="flex items-center bg-white  absolute left-1/4 z-50 m-auto mt-16 p-3 h-[80vh] w-3/5 rounded-lg shadow-slate-800 shadow-2xl "
        >
          <button
            onClick={() => props.setClicked((clicked) => false)}
            className="absolute top-2 z-50 text-3xl  text-slate-700 pb-3 text-center hover:bg-slate-100 w-10 h-10 rounded-full right-6"
          >
            &times;
          </button>

          <img
            src={props.img_url}
            alt="Sneaker"
            className=" w-2/5 rounded-lg"
          />
          <div className=" w-1/2 absolute right-0 h-full">
            <h1 className=" tracking-wide text-3xl w-9/10 mt-3 font-bold text-slate-400">
              {props.cloth_type ? props.cloth_type : props.shoe_type}
            </h1>
            <p className="text-xl font-semibold text-slate-400">
              {props.category}
            </p>
            <p className=" text-lg  mt-8 mb-2 w-9/10 text-slate-900 ">
              {props.description}
            </p>

            <div className="flex my-4 ">
              {/* {console.log(color)} */}
              {props.color.map((clr, index) => (
                <button
                  key={index}
                  className={`mt-4 border border-slate-500 rounded-full mr-4 bg-[${clr}] w-7 h-7`}
                />
              ))}
            </div>

            <div className="flex my-4">
              {props.size.map((sz, index) => (
                <button
                  key={index}
                  className="mt-4 border border-slate-200 rounded-lg w-9 h-9 text-center text-lg full mr-2"
                >
                  {props.cloth_type ? clothSize[sz] : sz}
                </button>
              ))}
            </div>

            <p className="text-3xl font-bold my-4 mt-6  text-slate-900 ">
              ${(Number(props.price.$numberDecimal) * quantity).toFixed(2)}
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
                value={quantity}
                min={1}
                type="number"
                id="myNumberInput"
                onChange={handleChange}
                className="w-20 py-1 mx-4 outline-none text-center   bg-slate-100"
              />
              <button
                onClick={() =>
                  quantity < props.quantity &&
                  setQuantity((quantity) => quantity + 1)
                }
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
