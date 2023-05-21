import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ApplianceFilter from "./ApplianceFilter";
import ClothesFilter from "./ClothesFilter";
import CosmeticsFilter from "./CosmeticsFilter";
import DecorationFilters from "./DecorationFilters";
import FurnitureFilters from "./FurnitureFilters";
import ShoesFilter from "./ShoesFilter";
import ApplyFilter from "./filtericons/ApplyFilter";
import ColorPrice from "./ColorPrice";
import ProductsFromDB from "../../../data/ProductsFromDB";
import Footer from "../../../Home/Footer";

interface propType {
  enum:
    | "Clothes"
    | "Shoes"
    | "Furnitures"
    | "Decorations"
    | "Cosmetics"
    | "Appliances";
}
interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}

const Filters = (props: propType) => {
  const [filters, setFilters] = useState<filterType>({});
  const [priceOrder, setPriceOrder] = useState("");
  const [sizes, setSizes] = useState<Array<string>>([]);
  const [colors, setColors] = useState<Array<string>>([]);
  //   useEffect(()=>{
  // console.log(filters)
  //   },[filters])
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 hidden lg:block text-white h-full p-10 w-1/5"
      >
        <h1 className="text-center text-6xl mb-6 font-semibold border-b pb-4">
          Filters
        </h1>

        {props.enum === "Clothes" ? (
          <>
            <ClothesFilter
              filters={filters}
              setFilters={setFilters}
              sizes={sizes}
              setSizes={setSizes}
            />
            <ColorPrice
              filters={filters}
              setFilters={setFilters}
              colors={colors}
              setColors={setColors}
              priceOrder={priceOrder}
              setPriceOrder={setPriceOrder}
            />
          </>
        ) : props.enum === "Shoes" ? (
          <>
            <ShoesFilter
              filters={filters}
              setFilters={setFilters}
              sizes={sizes}
              setSizes={setSizes}
            />
            <ColorPrice
              filters={filters}
              setFilters={setFilters}
              colors={colors}
              setColors={setColors}
              priceOrder={priceOrder}
              setPriceOrder={setPriceOrder}
            />
          </>
        ) : props.enum === "Cosmetics" ? (
          <CosmeticsFilter />
        ) : props.enum === "Furnitures" ? (
          <FurnitureFilters />
        ) : props.enum === "Decorations" ? (
          <DecorationFilters />
        ) : props.enum === "Appliances" ? (
          <ApplianceFilter />
        ) : (
          <div className="text-8xl font-bold">404 page not found</div>
        )}
      </motion.div>
      {/* currently just showing clothes and shoes as only shoes and clothes product available in db */}
      {props.enum === "Clothes" ? (
        <ProductsFromDB
          type="clothes"
          callOrigin="category"
          filters={filters}
        />
      ) : props.enum === "Shoes" ? (
        <ProductsFromDB type="shoes" callOrigin="category" filters={filters} />
      ) : null}
      <div className=" top-24 lg:left-[20%] absolute border-t  border-slate-800 w-full lg:w-4/5 h-24 py-2">
        <>
          <ApplyFilter
            filters={filters}
            setFilters={setFilters}
            setPriceOrder={setPriceOrder}
            setSizes={setSizes}
            setColors={setColors}
          />
        </>
      </div>

    </>
  );
};

export default Filters;
