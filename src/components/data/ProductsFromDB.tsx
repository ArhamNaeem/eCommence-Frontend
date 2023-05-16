import React, { useRef, useState } from "react";
import Modal from "./Modal";
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
interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}

interface propType {
  type?: string;
  callOrigin: "main" | "category";
  filters?:filterType;
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
            : "absolute grid grid-cols-2 md:grid-cols-3 w-full lg:w-4/5 h-full top-48 lg:left-[20%]"
        }`}
      >
        {props.callOrigin === "main" ? (
          <h1 className=" text-4xl mt-10 md:mt-0 md:text-6xl lg:text-7xl ml-10 text-center font-bold text-slate-700 ">
            Products
          </h1>
        ) : null}
        {props.callOrigin === "main" ? (
          <div className="grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center p-4 h-full">
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
            filters = {props.filters}
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
