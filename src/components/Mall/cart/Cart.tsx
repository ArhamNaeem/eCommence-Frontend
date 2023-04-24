import React from "react";
import { useContext } from "react";
import { ProductContext } from "../MallMain";
import { AnimatePresence, motion } from "framer-motion";
interface cartType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Cart = (props: cartType) => {
  const { itemsSelected } = useContext(ProductContext);
  return (
    <>
      <AnimatePresence>
        {props.showCart && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed z-[60] w-1/2 right-0 top-0 text-white
            bg-slate-200 shadow-lg shadow-slate-600  h-full "
          >
            <button
              onClick={() => props.setShowCart((showCart) => false)}
              className="absolute right-10 top-4 z-[70] text-3xl  text-slate-700 pb-3 text-center hover:bg-slate-100 w-10 h-10 rounded-full "
            >
              &times;
            </button>
            Cart
            {
              itemsSelected.map((item,index) => (
                <div key={index}>
                <div>{itemsSelected.length}</div>
                  <div>{item.category}</div>
                </div>
              ))
            }
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
