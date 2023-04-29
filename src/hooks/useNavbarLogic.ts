import { useState, useMemo, useEffect, useRef } from "react";




export const useNavbarLogic = () => {
  const [scrollDirection, setScrollDirection] = useState<boolean | undefined>();
    const scrollYRef = useRef(0);

      const [itemsBought, setItemsBought] = useState(0);
  const [ isThreeDigit, showBoughtItems] = useMemo(() => {
        const showBoughtItems = itemsBought > 99 ? "99+" : "";
        const distance = itemsBought >= 10 ? 'left-[0.9rem]' : 'left-[1.2rem]';
        const isThreeDigit =
          itemsBought > 99
            ? "top-3 left-[0.8rem] text-sm  tracking-tighter"
            : `top-2 ${distance}`;
        return [ isThreeDigit, showBoughtItems];
      }, [itemsBought]);

      useEffect(() => {
        const addPlaceholderValue = () => {
          const parent = document.getElementById("products");
          const opt = document.createElement("option");
          opt.value = "";
          opt.text = "Categories";
          parent?.insertBefore(opt, parent.firstChild);
          opt.style.display = "none";
          opt.selected = true;
        };
         window.addEventListener("scroll", (e) => {
           if (scrollYRef.current < scrollY) {
             setScrollDirection((scrollDirection) => true);
           } else if (scrollYRef.current > scrollY) {
             setScrollDirection((scrollDirection) => false);
           }
           scrollYRef.current = scrollY;
         });
       
        addPlaceholderValue();
      }, []);
   return {
     itemsBought,
     isThreeDigit,
     setItemsBought,
     showBoughtItems,
     scrollDirection,
   };
}