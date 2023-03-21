import React from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const productImgs = [
    {
      link: "https://images.unsplash.com/photo-1603798125914-7b5d27789248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Clothes",
    },
    {
      link: "https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxzbmVha2VyJTIwcGhvdG9zaG9vdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Shoes",
    },
    {
      link: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Cosmetics",
    },
    {
      link: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Furniture",
    },
    {
      link: "https://images.unsplash.com/photo-1526057372486-90c2459c301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRlY29yYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Decorations",
    },
    {
      link: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGlhbmNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Appliances",
    },
  ];
  return (
    <>
      <div className=" h-full bg-black text-slate-900 bg-opacity-10 p-10">
        <h1 className="text-center text-7xl mb-10 font-bold ">CATEGORIES</h1>
        <div className="  w-full flex flex-wrap  justify-center m-auto">
          {productImgs.map((product, index) => (
            <button
              key={index}
              onClick={() => navigate(`/mall/store/${product.title.toLowerCase()}`)}
              className="relative m-3 border hover:scale-105  transition-all duration-300 shadow-lg  flex justify-center  shadow-slate-400 h-96 w-5/12"
            >
              <div className="h-full w-full ">
                <img
                  src={`${product.link}`}
                  alt=""
                  className="-z-10 duration-500 h-full m-auto"
                />
                <div className="absolute top-0  bg-black h-full w-full  opacity-40 z-10" />
              </div>
              <p className="top-1/3 z-40 text-shadow-100 text-white text-5xl absolute border border-x-0 border-y-1 border-white py-3 transition-colors duration-300 hover:text-slate-200">
                {product?.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
