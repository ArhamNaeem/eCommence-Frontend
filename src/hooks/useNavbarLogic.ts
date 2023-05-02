import { useState, useMemo, useEffect, useRef, useContext } from "react";
import { ProductContext } from "../components/Mall/MallMain";



export const useNavbarLogic = () => {
const {itemsSelected} = useContext(ProductContext)

  const [scrollDirection, setScrollDirection] = useState<boolean | undefined>();
    const scrollYRef = useRef(0);
    // const {selectedItemsCount} = useContext(ProductContext)

      // const [itemsBought,setItemsBought] = useState(0);
  const [ ISTHREEDIGIT, ITEM_BOUGHT_GT_99] = useMemo(() => {
        const ITEM_BOUGHT_GT_99 = itemsSelected.length > 99 ? "99+" : "";
        const DISTANCE = itemsSelected.length >= 10 ? 'left-[0.9rem]' : 'left-[1.2rem]';
        const ISTHREEDIGIT =
          itemsSelected.length > 99
            ? "top-3 left-[0.8rem] text-sm  tracking-tighter"
            : `top-2 ${DISTANCE}`;
        return [ ISTHREEDIGIT, ITEM_BOUGHT_GT_99];
      }, [itemsSelected.length]);

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
    //  itemsSelected.length,
     ISTHREEDIGIT,
    //  setitemsSelected.length,
     ITEM_BOUGHT_GT_99,
     scrollDirection,
   };
}