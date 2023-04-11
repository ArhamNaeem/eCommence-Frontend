import React, { useEffect } from "react";
import ProductsFromDB from "../../../data/ProductsFromDB";
import Navbar from "../../Navbar";
import Filters from "../filters/Filters";
import ApplyFilter from "../filters/filtericons/ApplyFilter";

const ClothStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="w-3/4 left-1/4 p-8 text-center font-bold  absolute text-7xl text-slate-900   ">
        CLOTHES
      </h1>

      <Filters enum="Clothes" />
      {/* <ProductsFromDB/> */}
      {/* <hr className="absolute border border-slate-700 top-32 left-[20%] w-4/5" /> */}
    </>
  );
};

export default ClothStore;
