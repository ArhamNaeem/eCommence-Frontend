import React, { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";

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
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setProductInfo:  React.Dispatch<React.SetStateAction<productType | undefined>>;
}
const Products = (props: propType) => {
  

  const { productData }: { productData: productType[] } = useGetProducts(
    props.type || ""
  );
  return (
    <>
      {productData &&
        productData.map((product, index: number) => (
          <div
            key={index}
            onClick={() => {
              props.setProductInfo(product);
              props.setClicked((clicked) => true);
            }}
            className="hover:scale-105 bg-white transition-all duration-300 shadow-slate-400 shadow-xl flex flex-col items-center p-2 mx-2 my-10  h-[28rem] w-80"
          >
            <img
              loading="lazy"
              src={product.img_url}
              className=" mb-4 shadow-lg w-full h-[70%] object-contain rounded-lg"
            />
            <div className="w-full p-2">
              <p className="text-slate-500 text-xl font-bold tracking-wider">
                {product.cloth_type || product.shoe_type}
              </p>
              <p className="text-slate-400 font-bold  text-sm tracking-wide">
                {product.category}
              </p>
              <p className="text-slate-400 text-lg">
                $ {product.price.$numberDecimal}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Products;
