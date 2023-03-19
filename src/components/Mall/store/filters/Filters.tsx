import React from "react";
import ApplianceFilter from "./ApplianceFilter";
import ClothesFilter from "./ClothesFilter";
import CosmeticsFilter from "./CosmeticsFilter";
import DecorationFilters from "./DecorationFilters";
import FurnitureFilters from "./FurnitureFilters";
import ShoesFilter from "./ShoesFilter";

const Filters = () => {
  return (
    <>
      <div className="bg-slate-900 text-white h-full p-10 w-1/4">
        <h1 className="text-center text-6xl mb-6 font-semibold border-b pb-4">Filters</h1>
        {/* <ClothesFilter/> */}
        {/* <ShoesFilter/> */}
        {/* <CosmeticsFilter/> */}
        {/* <ApplianceFilter/> */}
        {/* <FurnitureFilters/> */}
        <DecorationFilters/>
      </div>
    </>
  );
};

export default Filters;
