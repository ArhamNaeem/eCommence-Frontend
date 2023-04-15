import React, { useState } from "react";
import Modal from "./Modal";
//make its type an enum which will accept any valid type of products to call a valid api
const ProductsFromDB = (props: any) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="absolute flex flex-wrap w-4/5 h-full top-48 left-[20%]">
        <div
          onClick={()=>setClicked(clicked=>!clicked)}
          className="hover:scale-105 transition-all duration-300 shadow-slate-300 shadow-2xl flex flex-col items-center p-2 mx-5 my-10  h-[28rem] w-80">
          <img
            src="https://i.pinimg.com/originals/b1/95/e0/b195e04251611494d0905a782be58310.png"
            className=" mb-4 shadow-lg w-full"
          />
          <div className="w-full p-2">
            <p className="text-slate-500 text-3xl font-bold tracking-wider">
              Air Max 90
            </p>
            <p className="text-slate-400 font-bold  text-lg tracking-wide">
              SNEAKERS
            </p>
            <p className="text-slate-400 text-lg">$300</p>
          </div>
        </div>
      </div>
      {clicked && (
        <Modal
          url={
            "https://cdn.shopclues.com/images1/thumbnails/102629/320/320/147648804-102629350-1567594361.jpg"
          }
        />
      )}
    </>
  );
};

export default ProductsFromDB;
