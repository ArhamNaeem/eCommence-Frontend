import React, { useRef, useState } from "react";
import Modal from "./Modal";
//make its type an enum which will accept any valid type of products to call a valid api
import { ProductContext } from "../../App";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Products from "./Products";
interface productType {
  category: string;
  cloth_type?: string;
  shoe_type?: string;
  color: string[];
  createdAt: Date;
  description: string;
  img_url: string;
  price: Record<string, string>;
  quantity: number;
  size: number[];
  updatedAt: Date;
  __v: number;
  _id: string;
}

interface propType {
  type?: string;
  callOrigin: "main" | "category";
}

const ProductsFromDB = (props: propType) => {
  const [clicked, setClicked] = useState(false);
  const [productInfo, setProductInfo] = useState<productType>();

  return (
    <>
      <div
        className={`${
          props.callOrigin === "main"
            ? "h-full w-full  z-40"
            : "absolute grid grid-cols-3 w-4/5 h-full top-48 left-[20%]"
        }`}
      >
        {props.callOrigin === "main" ? (
          <h1 className="text-7xl ml-10 text-center font-bold text-slate-700 ">
            Products
          </h1>
        ) : null}
        {props.callOrigin === "main" ? (
          <div className="grid w-full grid-cols-4 place-items-center p-4 h-full">
            <Products
              type={props.type}
              setClicked={setClicked}
              setProductInfo={setProductInfo}
            />
          </div>
        ) : (
          <Products
            type={props.type}
            setClicked={setClicked}
            setProductInfo={setProductInfo}
          />
        )}
      </div>
      <AnimatePresence>
        {clicked && productInfo && (
          <Modal
            setClicked={setClicked}
            cloth_type={productInfo.cloth_type}
            shoe_type={productInfo.shoe_type}
            category={productInfo.category}
            color={productInfo.color}
            description={productInfo.description}
            img_url={productInfo.img_url}
            price={productInfo.price}
            quantity={productInfo.quantity}
            size={productInfo.size}
          />
        )}
      </AnimatePresence>
      {/* </div> */}
    </>
  );
};

export default ProductsFromDB;
