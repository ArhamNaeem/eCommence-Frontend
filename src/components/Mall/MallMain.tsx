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
  actualQuantity:number;
  size: number | string;
}
interface ProductContextType {
  itemsSelected: productType[];
  setItemsSelected: Dispatch<SetStateAction<productType[]>>;
  selectedItemQuantity:number;
  setSelectedItemQuantity: Dispatch<SetStateAction<number>>;
}

export const ProductContext = createContext<ProductContextType>({
  itemsSelected: [],
  setItemsSelected: () => {},
  selectedItemQuantity: 0,
  setSelectedItemQuantity: () => {},
});

const MallMain = () => {
  const [selectedItemQuantity,setSelectedItemQuantity] = useState(0);
  const [itemsSelected, setItemsSelected] = useState<productType[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <ProductContext.Provider value={{ itemsSelected, setItemsSelected,selectedItemQuantity,setSelectedItemQuantity }}>
      
          <Navbar />
          <FreeDelivery />
          <Products />
          <ProductsFromDB  callOrigin="main"/>
        
          <Footer />
   
      </ProductContext.Provider>
  );
};

export default MallMain;
