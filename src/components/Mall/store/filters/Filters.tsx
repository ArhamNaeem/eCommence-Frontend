import { motion } from "framer-motion";
import React from "react";
import ApplianceFilter from "./ApplianceFilter";
import ClothesFilter from "./ClothesFilter";
import CosmeticsFilter from "./CosmeticsFilter";
import DecorationFilters from "./DecorationFilters";
import FurnitureFilters from "./FurnitureFilters";
import ShoesFilter from "./ShoesFilter";

interface propType {
  enum:
    | "Clothes"
    | "Shoes"
    | "Furnitures"
    | "Decorations"
    | "Cosmetics"
    | "Appliances";
}

const Filters = (props: propType) => {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900  text-white h-full p-10 w-1/4"
      >
        <h1 className="text-center text-6xl mb-6 font-semibold border-b pb-4">
          Filters
        </h1>
        {props.enum === "Clothes" ? (
          <ClothesFilter />
        ) : props.enum === "Shoes" ? (
          <ShoesFilter />
        ) : props.enum === "Cosmetics" ? (
          <CosmeticsFilter />
        ) : props.enum === "Furnitures" ? (
          <FurnitureFilters />
        ) : props.enum === "Decorations" ? (
          <DecorationFilters />
        ) : props.enum === "Appliances" ? (
          <ApplianceFilter />
        ) : (
          <div className="text-8xl font-bold">404 page no found</div>
        )}
      </motion.div>
    </>
  );
};

export default Filters;
