import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Footer from "../Home/Footer";
import FreeDelivery from "./sections/FreeDelivery";
import Navbar from "./Navbar";
import Products from "./sections/Products";
import ProductsFromDB from "../data/ProductsFromDB";
import { createContext } from "react";


const MallMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <>
          <Navbar />
          <FreeDelivery />
          <Products />
          <ProductsFromDB  callOrigin="main"/>
          <Footer />
      </>
   
  );
};

export default MallMain;
