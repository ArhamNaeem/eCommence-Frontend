import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCarouseLogic } from "../../../hooks/useCarouselLogic";

const ProductDisplay = (props:any) => {
  const { products,carouselProps } = useCarouseLogic();

  return (
    <>
      <motion.div
        ref={props.entryRef}
        className=" overflow-hidden border  text-white text-center p-4 text-3xl font-semibold text-shadow-200 bg-black bg-opacity-25 h-vh-85 w-full"
      >
        <div className="flex items-center">
          <hr className="border border-gray-300  flex-grow mr-2" />
          <h2 className="text-4xl lg:text-5xl  font-semi-bold text-shadow-200">
            Products
          </h2>
          <hr className="border border-gray-300 flex-grow ml-2" />
        </div>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          stopOnHover={true}
          {...carouselProps}
          className=" mt-16 h-3/4 flex overflow-hidden"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full h-72 transition-all duration-500 hover:shadow-xl shadow-black hover:scale-105 "
            >
              <div className=" hover:opacity-100 hover:z-50 w-full h-full flex justify-center  relative">
                <h1 className="z-20 absolute text-5xl top-1/3 text-shadow-100  ">
                  {product.name}
                </h1>
                <div className="">
                  <img
                    loading="lazy"
                    className=" w-full rounded-lg h-full"
                    src={product.img}
                  />
                </div>
                <div className="absolute  opacity-30 bg-black h-full w-full"></div>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </>
  );
};

export default ProductDisplay;
