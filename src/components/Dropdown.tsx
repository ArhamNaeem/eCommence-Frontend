import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
interface propType {
    clicked: boolean;
}

const Dropdown = (props:propType) => {
  // const angularBracket =  '&#12297;'
  const [hovered,setHovered]= useState(false)
  return (
    <div>
      <AnimatePresence>
        {props.clicked && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", duration: 0.6 }}
            className="h-screen  text-white w-full absolute z-10  bg-black"
          >
            <h1 className='text-3xl w-96'>
              Achieving our goal, to provide you with high-quality products at
              affordable prices. Happy shopping!
            </h1>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown
