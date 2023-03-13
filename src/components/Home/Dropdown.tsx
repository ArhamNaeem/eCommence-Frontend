import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import StoreMain from "../Store/StoreMain";
interface propType {
  clicked: boolean;
}

const Dropdown = (props: propType) => {
  const navigate = useNavigate();
  // const angularBracket =  '&#12297;'
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <AnimatePresence>
        {props.clicked && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", duration: 0.6 }}
            className=" fixed h-screen  text-white w-full z-50  bg-black"
          >
            {/* <h1 className="text-3xl w-96">
              Achieving our goal, to provide you with high-quality products at
              affordable prices. Happy shopping!
            </h1> */}
            {/* <div className="text-4xl  flex justify-center items-center h-full">
              <ul>
                <motion.li whileHover={{ x: 10 }} className="mb-12">
                  Home
                </motion.li>
                <motion.li whileHover={{ x: 10 }} className="mb-12">
                  Shop now
                </motion.li>

                <motion.li whileHover={{ x: 10 }} className="mb-12">
                  Contact us
                </motion.li>
              </ul>
            </div> */}
            <button
              onClick={()=> navigate('/store')}
              className="text-6xl">
              Store
          </button>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
