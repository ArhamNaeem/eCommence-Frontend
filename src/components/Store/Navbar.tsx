import React, { useEffect, useMemo, useState } from 'react'
import Logo from '../../utils/Logo'

const Navbar = () => {
  const [itemsBought, setItemsBought] = useState(0);
  const [distance, isThreeDigit,showBoughtItems] = useMemo(() => {
    const showBoughtItems = itemsBought >= 99 ? '99+' : "";
    const distance = itemsBought >= 10 ? 0.93 : 1.2;
    const isThreeDigit = itemsBought >= 99 ? 'top-3 left-[0.8rem] text-sm  tracking-tighter' : 'top-2';
    return [distance,isThreeDigit,showBoughtItems]
  },[itemsBought])

  useEffect(() => {
      const addPlaceholderValue = (() => {
        const parent = document.getElementById("products");
        const opt = document.createElement('option');
        opt.value=""
        opt.text = "Categories";
        parent?.insertBefore(opt, parent.firstChild);
        opt.style.display='none'
        opt.selected=true

    })()
  
  },[])


  return (
    <>
      <div className="p-2 pb-0 bg-gradient-to-br from-black to-slate-800 h-20 w-full text-white">
        <div className="flex w-full items-center justify-center">
          <Logo width={50} height={50} mt={1} ml={2} mr={2} textMarginTop={3} />

          <div className=" w-2/3  h-full flex items-center justify-center mt-3 ">
            <div className="w-20 h-10 mr-5 mt-2 ">
              <select id="products" className="p-1 rounded-sm bg-black border ">
                <option value="cloth">Clothes</option>
                <option value="sneaker">Sneakers</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="deco">Decorations</option>
                <option value="furniture">Furniture</option>
                <option value="appliance">Appliances</option>
              </select>
            </div>

            <input
              type="text"
              className="w-1/3 h-9 ml-6 bg-transparent border outline-none rounded-md border-white p-2"
            />
            <button className="border h-9 w-20 mx-2 rounded-md  hover:text-slate-200">
              Search
            </button>
          </div>
          <button
            onClick={() => setItemsBought(itemsBought => itemsBought + 10)}
            className="relative mr-14 mt-3 flex">
            {/* when >=10 0.93rem */}
            <h5 className={`absolute left-[${distance}rem] ${isThreeDigit} `}>
   
              {showBoughtItems? showBoughtItems:itemsBought}
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
            <p className='text-lg mr-1 mt-2'>Cart</p>
          </button>
        </div>
      </div>
      
    </>
  );
}

export default Navbar
