import React, { useState } from "react";
import Modal from "./Modal";
import useGetProducts from "../../hooks/useGetProducts";
import InfiniteScroll from "react-infinite-scroll-component";
//make its type an enum which will accept any valid type of products to call a valid api

interface productType {
  category: string;
  cloth_type: string;
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
const ProductsFromDB = (props: any) => {
  const [clicked, setClicked] = useState(false);
  const [productInfo,setProductInfo]=useState<productType>()
  const { productData }: { productData?: productType[] } = useGetProducts();
  const {fetchData} = useGetProducts()
  return (
    <>
      <div className="absolute grid grid-cols-3 w-4/5 h-full top-48 left-[20%]">
        {productData &&
          productData.map((product: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setProductInfo(product)
                setClicked((clicked) => !clicked);
              }}
              className="hover:scale-105 transition-all duration-300 shadow-slate-300 shadow-2xl flex flex-col items-center p-2 mx-5 my-10  h-[28rem] w-80"
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
      </div>
       {clicked && productInfo && (
        <Modal
          setClicked={setClicked}
          type={productInfo.cloth_type}
          category={productInfo.category}
          color={productInfo.color}
          description={productInfo.description}
          img_url={productInfo.img_url}
          price={productInfo.price}
          quantity={productInfo.quantity}
         size = {productInfo.size}
        />
      )} 
   
      
    </>
  );
};

export default ProductsFromDB;
