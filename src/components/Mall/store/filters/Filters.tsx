import React from "react";
import ClothesFilter from "./ClothesFilter";

const Filters = () => {
  return (
    <>
      <div className="bg-slate-900 text-white h-full p-10 w-1/4">
        <h1 className="text-center text-6xl mb-6 font-semibold border-b pb-4">Filters</h1>
        <ClothesFilter/>
      </div>
    </>
  );
};

export default Filters;
