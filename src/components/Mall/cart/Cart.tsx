import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../../App";
import { AnimatePresence, motion } from "framer-motion";
import useCartLogic from "../../../hooks/useCartLogic";
import Alert from "../../data/Alert";
import { CartTotal } from "./CartTotal";
interface cartType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
//TODO : MAKE PRODUCT QUANTITY CHANGE ON ITEM ADDITION + CREATE COMPONENT FOR FINAL PRICE

enum ModeValue {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}
const Cart = (props: cartType) => {
  const {
    itemsSelected,
    setItemsSelected,
    selectedItemQuantity,
    setSelectedItemQuantity,
    //  setSelectedItemsCount,
  } = useContext(ProductContext);
  const {
    showAlert,
    setShowAlert,
    removeFromCart,
    changeQuantity,
  } = useCartLogic(itemsSelected, setItemsSelected, setSelectedItemQuantity);

  return (
    <>
      <Alert
        msg="REMOVED FROM CART"
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <AnimatePresence>
        {props.showCart && (
          <>
            <motion.button
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "tween", delay: 0.1 }}
              onClick={() => props.setShowCart((showCart) => false)}
              className="fixed right-10 top-4 z-[70] text-3xl  text-slate-700 pb-3 text-center bg-slate-100 hover:bg-slate-300 w-10 h-10 rounded-full "
            >
              &times;
            </motion.button>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed  overflow-y-scroll z-[60] w-1/2 right-0 top-0 text-white
            bg-slate-200 flex flex-col items-center shadow-lg shadow-slate-600  h-full "
            >
              <h1 className="text-5xl font-bold text-slate-800  h-[12%] text-center pt-3">
                Your Items
              </h1>
              <AnimatePresence>
                {itemsSelected.map((item, index) => (
                  <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100vw" }}
                    transition={{ type: "tween", delay: 0.1 * index }}
                    className=" w-10/12 m-2 my-10 flex  h-2/5 shadow-lg shadow-slate-400 text-slate-800"
                    key={index}
                  >
                    <img
                      className=" h-full w-1/2 object-contain"
                      src={item.img_url}
                      alt="image"
                    />
                    <div className="p-5 pt-1 text-lg font-semibold w-full">
                      <h1 className="text-xl  font-bold">{item.type}</h1>
                      <h2 className="text-xl font-semibold">{item.category}</h2>
                      <p className="mt-2">Size: {item.size}</p>
                      <div className="flex my-1 ">
                        Color:
                        <p
                          className={`mx-2 mt-[2px]  w-6 h-6 border border-slate-500 rounded-full`}
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-lg font-bold">
                          $
                          {Number(
                            item.price * selectedItemQuantity[index]
                          ).toFixed(2)}
                        </p>
                        <div>
                          <button
                            //put it inside a function
                            onClick={() =>
                              changeQuantity(
                                ModeValue.DECREMENT,
                                selectedItemQuantity,
                                item,
                                index
                              )
                            }
                            className="text-2xl font-bold"
                          >
                            &#8722;
                          </button>
                          <input
                            value={selectedItemQuantity[index]}
                            min={1}
                            type="number"
                            id="myNumberInput"
                            readOnly
                            className="w-14 py-1 mx-2 outline-none text-center   bg-slate-100"
                          />
                          <button
                            onClick={(e) =>
                              changeQuantity(
                                ModeValue.INCREMENT,
                                selectedItemQuantity,
                                item,
                                index
                              )
                            }
                            className="text-2xl font-bold"
                          >
                            &#43;
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          // setSelectedItemsCount((prev) => prev - 1);
                          // setShowAlert(showAlert=>true)
                          removeFromCart(index, item, selectedItemQuantity);
                        }}
                        className=" font-bold bg-slate-900 text-xs mt-4 w-full text-slate-300 rounded-lg p-2"
                      >
                        REMOVE FROM CART
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <CartTotal />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
