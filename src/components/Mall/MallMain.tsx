import React, { useContext, useEffect, useState } from "react";
import Footer from "../Home/Footer";
import FreeDelivery from "./sections/FreeDelivery";
import Navbar from "./Navbar";
import Products from "./sections/Products";
import { motion, spring } from "framer-motion";
import ProductsFromDB from "../data/ProductsFromDB";
import { createContext } from "react";

interface productType {
  category: string;
  type: string;
  color: string;
  description: string;
  img_url: string;
  price: number;
  quantity: number;
  size: number | string;
}
interface ProductContextType {
  itemsSelected: productType[];
  setItemsSelected: (items:productType[])=>void
}

export const ProductContext = createContext<ProductContextType>({
  itemsSelected: [],
  setItemsSelected: () => { }
});

const MallMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [itemsSelected, setItemsSelected] = useState<productType[]>([]);
  return (
    <>
      <ProductContext.Provider value={{ itemsSelected, setItemsSelected }}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0vw" }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <FreeDelivery />
          <Products />
          {/* <div className="relative bg-slate-200 h-full w-full"> */}
            {/* <ProductsFromDB /> */}
          {/* </div> */}
          {/* <Footer /> */}
        </motion.div>
      </ProductContext.Provider>
    </>
  );
};

export default MallMain;
