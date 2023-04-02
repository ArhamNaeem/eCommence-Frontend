import { useRef, useState, useEffect, MutableRefObject } from "react";
export const useHandleLoading = (myRef: MutableRefObject<undefined|Element>) => {
    const scrollYRef = useRef(0);
    //Make the button appear when cursor moved to near top of the screen
  const [showBtn, setShowBtn] = useState<boolean | undefined>();
  const [intersecting, setIntersecting] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<boolean | undefined>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // console.log('intersecting')
        setIntersecting(intersecting => true)
        // observer.unobserve(entry)
      } else {
        setIntersecting(intersecting =>false)
      }
    },
      {
      threshold:0.1
    }
    );

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
  return { scrollDirection, intersecting };
};