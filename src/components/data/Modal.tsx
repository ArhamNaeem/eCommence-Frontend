import { AnimatePresence, motion } from "framer-motion";
import React, { ChangeEvent, useRef, useState } from "react";
import { ProductContext } from "../../App";
import { useContext } from "react";
import Alert from "./Alert";
import useCartLogic from "../../hooks/useCartLogic";

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

interface productType {
  category: string;
  type: string;
  color: string;
  description: string;
  img_url: string;
  price: number;
  quantity: number;
  size: number | string;
  actualQuantity: number;
}

const Modal = (props: modalType) => {
  const selectedProducts: productType = {
    category: props.category,
    type: props.cloth_type || props.shoe_type || "",
    color: "",
    description: props.description,
    img_url: props.img_url,
    price: Number(props.price.$numberDecimal),
    quantity: 1,
    size: 0,
    actualQuantity: props.quantity,
  };
  const {
    itemsSelected,
    setItemsSelected,
    setSelectedItemQuantity,
    // setSelectedItemsCount,
    selectedItemQuantity,
    // selectedItemsCount
  } = useContext(ProductContext);
  const { ...rest } = useCartLogic(
    // props.quantity,
    itemsSelected,
    setItemsSelected,
    setSelectedItemQuantity,
    
  );
  return (
    <>
      <Alert
        msg={rest.alertMsg.current}
        showAlert={rest.showAlert}
        setShowAlert={rest.setShowAlert}
      />
      <div className={`fixed z-[90] top-0 -left-5  bg-black w-full`}>
        <div className="fixed inset-0 bg-black opacity-50 "></div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          className=" flex items-center bg-white  absolute
          left-[15%] md:left-1/4 z-50 m-auto mt-16 p-3 h-[80vh] w-4/5 md:w-3/5 rounded-lg shadow-slate-800 shadow-2xl "
        >
          <button
            onClick={() => {
              props.setClicked((clicked) => false);
              rest.setShowAlert((showAlert) => false);
            }}
            className="absolute top-2 z-50 text-3xl  text-slate-700 pb-3 text-center hover:bg-slate-100 w-10 h-10 rounded-full right-6"
          >
            &times;
          </button>

          <img
            src={props.img_url}
            alt="Sneaker"
            className=" w-2/5 rounded-lg"
          />
          <div className="w-1/2 absolute right-0 h-full">
            <h1 className=" tracking-wide text-3xl w-5/6  mt-3  font-bold text-slate-400">
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
                  onClick={() => {
                    rest.colorRef.current = clr;
                    rest.setSelectedColor((selectedColor) => index);
                  }}
                  className={`mt-4 border  border-slate-800 rounded-full mr-4 w-7 h-7`}
                  style={{
                    backgroundColor: clr,
                    opacity: rest.selectedColor === index ? 0.8 : 1,
                    borderWidth: rest.selectedColor === index ? "2px " : "1px",
                  }}
                />
              ))}
            </div>

            <div className="flex my-4">
              {props.size.map((sz, index) => (
                <button
                  key={index}
                  onClick={() => {
                    rest.sizeRef.current = props.cloth_type
                      ? rest.clothSize[sz]
                      : sz;
                    rest.setSelectedSize((selectedSize) => index);
                  }}
                  className={`mt-4 border border-slate-200 rounded-lg w-9 h-9 text-center text-lg full mr-2  ${
                    rest.selectedSize === index
                      ? "opacity-80 border-2 text-slate-800"
                      : ""
                  } `}
                >
                  {props.cloth_type ? rest.clothSize[sz] : sz}
                </button>
              ))}
            </div>

            <p className="text-3xl font-bold my-4 mt-6  text-slate-900 ">
              ${(Number(props.price.$numberDecimal) * rest.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => {
                selectedProducts.color = rest.colorRef.current;
                selectedProducts.size = rest.sizeRef.current;
                rest.addToCart(
                  selectedProducts,
                  props.quantity,
                  Number(props.price.$numberDecimal),
                  selectedItemQuantity
                );
               rest.colorRef.current = ""
               rest.sizeRef.current = ""
                // setSelectedItemsCount((prev) => prev + 1);
                // console.log(selectedItemsCount)
              }}
              className="absolute bottom-12 font-bold bg-slate-900 text-slate-300 rounded-lg p-2"
            >
              ADD TO CART
            </button>

            <div className="absolute right-14 bottom-[3.2rem] ">
              {/* <p className="text-slate-900 text-sm font-semibold text-center">In Stock</p> */}
              <button
                onClick={() =>
                  rest.quantity > 1 &&
                  rest.setQuantity((quantity) => quantity - 1)
                }
                className="text-2xl font-bold"
              >
                &#8722;
              </button>
              <input
                value={rest.quantity}
                min={1}
                type="number"
                id="myNumberInput"
                onChange={(e) => rest.handleChange(e, props.quantity)}
                className="w-20 py-1 mx-4 outline-none text-center   bg-slate-100"
              />
              <button
                onClick={() =>
                  rest.quantity < props.quantity &&
                  rest.setQuantity((quantity) => quantity + 1)
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
