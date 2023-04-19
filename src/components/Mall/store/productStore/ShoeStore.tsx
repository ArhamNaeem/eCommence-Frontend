import React, { useEffect } from "react";
import Filters from "../filters/Filters";
import ProductsFromDB from "../../../data/ProductsFromDB";
import Errors from "../../../data/Alert";

const ShoeStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className=" w-3/4 left-1/4 p-2 text-center font-bold  absolute text-7xl text-slate-900   ">
        SHOES
      </h1>
      <Filters enum="Shoes" />
      {/* <Errors/> */}
      <ProductsFromDB type='shoes' />
    </>
  );
};

export default ShoeStore;
