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
            className="fixed overflow-y-scroll z-[60] w-1/2 right-0 top-0 text-white
            bg-slate-200 shadow-lg shadow-slate-600  h-full "
          >
            <button
              onClick={() => props.setShowCart((showCart) => false)}
              className="absolute right-10 top-4 z-[70] text-3xl  text-slate-700 pb-3 text-center hover:bg-slate-100 w-10 h-10 rounded-full "
            >
              &times;
            </button>

            {itemsSelected.map((item, index) => (
              <div
                className=" w-10/12 m-2 flex h-2/5 shadow-lg shadow-slate-400 text-slate-800"
                key={index}
              >
                <img
                  className=" h-full object-cover"
                  src={item.img_url}
                  alt="image"
                />
                <div className="p-5 pt-1 text-lg font-semibold w-full">
                  <h1 className="text-2xl font-bold">{item.type}</h1>
                  <h2 className="text-xl font-semibold">{item.category}</h2>
                  <p className="mt-5">Size: {item.size}</p>
                  <div className="flex my-1 ">
                    Color:
                    <p
                      className={`mx-2  w-7 h-7 border border-slate-500 rounded-full`}
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <div className="">
                    {/* <p className="text-slate-900 text-sm font-semibold text-center">In Stock</p> */}
                    <button
                      // onClick={() =>
                      //   quantity > 1 && setQuantity((quantity) => quantity - 1)
                      // }
                      className="text-2xl font-bold"
                    >
                      &#8722;
                    </button>
                    <input
                      // value={quantity}
                      min={1}
                      type="number"
                      id="myNumberInput"
                      // onChange={handleChange}
                      className="w-20 py-1 mx-4 outline-none text-center   bg-slate-100"
                    />
                    <button
                      // onClick={() =>
                      //   quantity < props.quantity &&
                      //   setQuantity((quantity) => quantity + 1)
                      // }
                      className="text-2xl font-bold"
                    >
                      &#43;
                    </button>
                  </div>
                  {/* <p></p>  
                 <p></p>  */}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
