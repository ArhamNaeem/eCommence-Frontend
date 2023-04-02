import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useNavbarLogic } from '../../hooks/useNavbarLogic';
import Logo from '../../utils/Logo'
const Navbar = () => {
  const {itemsBought,setItemsBought,showBoughtItems,isThreeDigit,scrollDirection} = useNavbarLogic()
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={scrollDirection ? { y: "0" } : {}}
        animate={scrollDirection ? { y: "-100vh" } : {}}
        exit={scrollDirection ? { y: "0" } : {}}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="hidden lg:block fixed z-50 p-2 pb-0 bg-slate-900 bg-opacity-70 backdrop-blur-lg h-20 w-full text-white"
      >
        <div className="flex w-full items-center justify-center">
          <Logo
            width={50}
            height={50}
            mt={1}
            ml={2}
            mr={2}
            textMarginTop={3}
            logoColor="white"
          />

          <div className=" w-2/3   h-full flex items-center justify-center  mt-3 ">
            <div className="flex justify-center w-4/5">
              <select
                onChange={(e) => navigate(`store/${e.target.value}`)}
                id="products"
                className="p-1 rounded-sm bg-black bg-opacity-70  border "
              >
                <option value="clothes">Clothes</option>
                <option value="shoes">Shoes</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="decorations">Decorations</option>
                <option value="furniture">Furniture</option>
                <option value="appliances">Appliances</option>
              </select>

              <input
                type="text"
                className=" w-3/5 h-9 ml-6 bg-transparent border outline-none rounded-md border-white p-2"
              />
              <button className="border h-9 w-20 mx-2 rounded-md  hover:text-slate-200">
                Search
              </button>
            </div>
            <button
              onClick={() => navigate("/sign-in")}
              className="border h-9 w-20 rounded-md  hover:text-slate-200"
            >
              Sign in
            </button>
          </div>

          <button
            onClick={() => {
              navigate("cart/");
            }}
            className="relative mr-14 mt-3 flex"
          >
            {/* when >=10 0.93rem */}
            <h5 className={`absolute ${isThreeDigit} `}>
              {showBoughtItems ? showBoughtItems : itemsBought}
            </h5>
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
            <p className="text-lg mr-1 mt-2">Cart</p>
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar
