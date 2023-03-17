import { useState, useMemo, useEffect } from "react";

export const useNavbarLogic = () => {
      const [itemsBought, setItemsBought] = useState(0);
  const [ isThreeDigit, showBoughtItems] = useMemo(() => {
        const showBoughtItems = itemsBought >= 99 ? "99+" : "";
        const distance = itemsBought >= 10 ? 'left-[0.9rem]' : 'left-[1.2rem]';
        const isThreeDigit =
          itemsBought >= 99
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
        addPlaceholderValue();
      }, []);
   return {itemsBought,isThreeDigit,setItemsBought,showBoughtItems}
}