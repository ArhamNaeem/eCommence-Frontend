import { AnimatePresence, motion } from "framer-motion";
import { useState, lazy, Suspense, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useGetImage } from "../../hooks/useGetImage";
import { useHandleLoading } from "../../hooks/useHandleLoading";
import Logo from "../../utils/Logo";
import Footer from "./Footer";
import BusinessDescription from "./sections/BusinessDescription";
const Dropdown = lazy(() => import("./Dropdown"));
const ProductDisplay = lazy(() => import("./sections/ProductDisplay"));
const SellersThoughts = lazy(() => import("./sections/SellersThoughts"));
const Header = () => {
  const prodDisplayRef = useRef();
  const sellerThoughtRef = useRef();
  const businessDescRef = useRef();
  const footerRef = useRef();
  const { img } = useGetImage();
  const navigate = useNavigate();

  const { scrollDirection, intersecting } = useHandleLoading(prodDisplayRef);
  const [clicked, setClicked] = useState(false);
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
      {/* <Dropdown clicked={clicked} />
      <AnimatePresence>
        <motion.button
          className="z-50 fixed mt-8  h-16 rounded-full w-16 right-20 bg-white  hover:scale-105 transition-all shadow-sm shadow-black "
          onClick={() => setClicked((clicked) => !clicked)}
          initial={scrollDirection ? { y: "0" } : {}}
          animate={scrollDirection ? { y: "-100vh" } : {}}
          exit={scrollDirection ? { y: "0" } : {}}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
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
        </motion.button>
      </AnimatePresence> */}
      <div className=" h-screen ">
        <motion.div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full shadow-inner shadow-black  overflow-hidden"
        >
          <div className="bg-black absolute opacity-40 h-full w-full  text-6xl" />

          <div className=" w-full bg-black bg-opacity-25 backdrop-blur-sm  mt-3  p-2 ">
            <Logo
              width={90}
              height={90}
              ml={8}
              mr={8}
              mt={0}
              mb={0}
              textSize={"7xl"}
              logoColor="white"
            />
          </div>
          <button
            onClick={()=>navigate('/mall')}
            className="absolute top-1/4 left-28  border border-black rounded-md p-6"
          >
            Shop Now
          </button>

          <div className="h-full  relative -bottom-20 z-20 flex items-center justify-center text-sm lg:text-xl text-white  text-shadow-100 ml-10">
            <p className=" w-3/4 backdrop-blur-lg  bg-black bg-opacity-20 justify-center text-center p-3 ">
              {text}
              <Cursor />
            </p>
          </div>
        </motion.div>
      </div>
      <Suspense fallback="loading">
        <ProductDisplay entryRef={prodDisplayRef} intersecting={intersecting} />
        <SellersThoughts />
        <BusinessDescription />
        <Footer />
      </Suspense>
    </>
  );
};

export default Header;
