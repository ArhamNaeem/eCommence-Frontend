import { AnimatePresence, motion } from "framer-motion";
import { useState, lazy, Suspense, useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useGetImage } from "../../hooks/useGetImage";
import Footer from "./Footer";
import BusinessDescription from "./sections/BusinessDescription";
const Dropdown = lazy(() => import("./Dropdown"));
const ProductDisplay = lazy(() => import("./sections/ProductDisplay"));
const SellersThoughts = lazy(() => import("./sections/SellersThoughts"));
const Header = () => {
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, [myRef.current]);

  const [clicked, setClicked] = useState(false);
  const { img } = useGetImage();
  const [text] = useTypewriter({
    words: [
      "Shop the world at your fingertips!",
      "Stay up to date with the latest trends and styles!",
      "At VibeKart, customer satisfaction is our top priority.",
      "We believe, customer loyalty is earned through exceptional service.",
      "We take pride in providing top-notch customer service to our valued shoppers.",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
  });
  return (
    <>
      {/* <AnimatePresence> */}
      <Dropdown clicked={clicked} />
      <button
        onScroll={()=>{console.log(scrollY)} }
        className="z-50 fixed mt-8  h-16 rounded-full w-16 right-20 bg-white  hover:scale-105 transition-all shadow-sm shadow-black "
        onClick={() => setClicked((clicked) => !clicked)}
      >
        {!clicked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
        {/* //here */}
        {clicked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-x w-16 h-12"
            viewBox="0 0 16 16"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        )}
      </button>
      <div className=" h-screen ">
        <motion.div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: 0.7,
          }}
          className="h-full shadow-inner shadow-black  overflow-hidden"
        >
          <div className="bg-black absolute opacity-40 h-full w-full  text-6xl"/>

          <div className="flex items-center w-full bg-black backdrop-blur-sm bg-opacity-25 mt-3  p-2 ">
            <motion.svg
              initial={{ rotate: -180 }}
              animate={{ rotate: -12 }}
              className="mx-6"
              width={`90`}
              height="90"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <motion.circle
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                cx="20.5"
                cy="41.5"
                r="3.5"
                fill="black"
              />
              <motion.circle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                cx="37.5"
                cy="41.5"
                r="3.5"
                fill="black"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                d="M5 6L14 12L19 34H39L44 17H25"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                d="M25 26L32.2727 26L41 26"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>

            <h1 className=" text-2xl lg:text-6xl  text-white font-semibold text-shadow-100 ">
              VibeKart
            </h1>
          </div>
          <div className="h-full relative z-20 flex items-center text-2xl lg:text-6xl text-white font-semibold text-shadow-100 ml-10">
            <p className=" w-3/4  lg:w-1/2 h-2/5">
              {text}
              <Cursor />
            </p>
          </div>
        </motion.div>
      </div>
      <Suspense fallback="loading">
        <ProductDisplay entryRef={myRef} />
        <SellersThoughts />
        <BusinessDescription />
        <Footer />
      </Suspense>
    </>
  );
};

export default Header;
