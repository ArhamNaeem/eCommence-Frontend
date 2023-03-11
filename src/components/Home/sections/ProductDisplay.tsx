import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = () => {
  const products = [
    {
      name: "Clothes",
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzaG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Shoes",
      img: "https://cdn.luxe.digital/media/20220626132753/on-running-sneakers-review-luxe-digital.jpg",
    },
    {
      name: "Furniture",
      img: "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc=",
    },
    {
      name: "Cosmetics",
      img: "https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.jpg?b=1&s=170667a&w=0&k=20&c=fArXdI1Ljsh3I3bnJ5D-9-XmP2Y_tFHzWz_f6VfI1Gg=",
    },
    {
      name: "Appliances",
      img: "https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlaG9sZCUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Decorations",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbidpgJrwfcdYs-bnOC2zwog3WxeckeIpMXg&usqp=CAU",
    },
  ];

  return (
    <>
      <motion.div

        initial={{ x: "60vw" }}
        animate={{ x: 0 }}
        className=" overflow-hidden text-white text-center p-4 text-3xl font-semibold text-shadow-200 bg-black bg-opacity-25 h-vh-85 w-full"
      >
        <div className="flex items-center">
          <hr className="border border-gray-300  flex-grow mr-2" />
          <h2 className="text-5xl  font-semi-bold text-shadow-200">Products</h2>
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
          centerMode
          centerSlidePercentage={33.3}
          className=" mt-16 h-3/4 flex  overflow-hidden"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className=" w-full h-72  transition-all duration-500 hover:shadow-xl shadow-black hover:scale-105 "
            >
              <div className="w-full h-full flex justify-center  relative">
                <h1 className="z-10 absolute text-5xl top-1/3 text-shadow-100 ">
                  {product.name}
                </h1>
                <img
                  loading="lazy"
                  className="opacity-70 w-full rounded-lg h-full hover:opacity-100"
                  src={product.img}
                  // style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </>
  );
};

export default ProductDisplay;
