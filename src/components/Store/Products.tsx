import React from "react";

const Products = () => {
  const clothImgs = [
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <>
      <div className=" h-vh-120 bg-black text-slate-900 bg-opacity-5 p-10">
        <h1 className="text-center text-7xl mb-10 font-bold ">CATEGORIES</h1>
        <div className=" h-full w-full flex flex-wrap  justify-center p-5 m-auto">
          {clothImgs.map((clothImg, index) => (
            <div
              key={index}
              className="relative m-3 border border-black  h-[24rem] w-5/12"
            >
              <img
                src={`${clothImg}`}
                alt=""
                className="transition-all duration-500 h-[23rem] m-auto mt-2"
              />
              <div className="absolute h-full w-full bg-black top-0 opacity-30 z-10"></div>
              <p className="top-1/3 left-20 z-50 text-white text-5xl absolute border border-x-0 border-y-1 border-white py-3">
                Clothes
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
