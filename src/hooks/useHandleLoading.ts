import { useRef, useState, useEffect, MutableRefObject } from "react";

export const useHandleLoading = (myRef: MutableRefObject<undefined|Element>) => {
    const scrollYRef = useRef(0);
    //Make the button appear when cursor moved to near top of the screen
  const [showBtn, setShowBtn] = useState<boolean | undefined>();
  const [scrollDirection, setScrollDirection] = useState<boolean | undefined>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
    });

    window.addEventListener("scroll", (e) => {
      if (scrollYRef.current < scrollY) {
        setScrollDirection((scrollDirection) => true);
      } else if (scrollYRef.current > scrollY) {
        setScrollDirection((scrollDirection) => false);
      }
      scrollYRef.current = scrollY;
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, [myRef.current]);
  return { scrollDirection };
};