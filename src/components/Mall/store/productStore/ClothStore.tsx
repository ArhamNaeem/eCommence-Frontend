import React, { useContext, useEffect, useState } from "react";
import ProductsFromDB from "../../../data/ProductsFromDB";
import Navbar from "../../Navbar";
import Filters from "../filters/Filters";
import ApplyFilter from "../filters/filtericons/ApplyFilter";
import Cart from "../../cart/Cart";
import { ProductContext } from "../../../../App";
import { useNavbarLogic } from "../../../../hooks/useNavbarLogic";

const ClothStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { itemsSelected } = useContext(ProductContext);
  const [showCart, setShowCart] = useState(false);
  const { ISTHREEDIGIT, ITEM_BOUGHT_GT_99 } = useNavbarLogic();
  return (
    <>
         <Cart showCart={showCart} setShowCart={setShowCart} />
      <button
        onClick={() => {
         itemsSelected.length &&  setShowCart((showCart) => !showCart);
        }}
        className="absolute top-3 z-10 right-10 mt-3 flex "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 
              .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61
               2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2
                2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1
                 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        <p className={`absolute ${ISTHREEDIGIT}`}>
        
          {ITEM_BOUGHT_GT_99 ? ITEM_BOUGHT_GT_99 : itemsSelected.length}
        </p>
        <h1 className="text-lg mr-1 mt-2">Cart</h1>
      </button>

      <h1 className="w-3/4 left-1/4 p-2 text-center font-bold  absolute text-7xl text-slate-900   ">
        CLOTHES
      </h1>

      <Filters enum="Clothes" />
      {/* <ProductsFromDB type="clothes" callOrigin="category"/> */}
      {/* <hr className="absolute border border-slate-700 top-32 left-[20%] w-4/5" /> */}
    </>
  );
};

export default ClothStore;
