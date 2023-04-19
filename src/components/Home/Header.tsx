import { motion } from "framer-motion";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useGetImage from "../../hooks/useGetImage";
import Logo from "../../utils/Logo";
import Footer from "./Footer";

const Header = () => {
  const { img } = useGetImage();
  const navigate = useNavigate();

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
      <main className="h-screen grid grid-cols-2 ">
        <div className="z-50  w-4/5 flex items-center font-bold justify-center text-lg lg:text-5xl text-white  text-shadow-100 ">
          <p
            aria-label="Loading messsages"
            role="status"
            className=" mb-20 ml-24 justify-center text-center p-3 "
          >
            {text}
            <Cursor />
          </p>
        </div>
        <motion.img
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, ease: "easeInOut" }}
          src={img}
          loading="lazy"
          className=" object-cover absolute top-0 h-full shadow-inner shadow-black w-full opacity-90 overflow-hidden"
        />
        <div className="bg-black absolute opacity-40 h-full w-full  text-6xl" />
        <div className=" relative " >
          <div className="absolute top-20   p-2 ">
            <Logo
              width={90}
              height={90}
              ml={20}
              mr={8}
              mt={0}
              mb={0}
              textSize={"5xl"}
              logoColor="white"
            />
          </div>
          <button
            onClick={() => navigate("/mall")}
            className="mr-20 absolute top-[40%] left-24 border text-white text-6xl border-white rounded-md p-6"
          >
            Shop Now
          </button>
        </div>
      </main>
      <Suspense fallback="Footer...">
        <Footer />
      </Suspense>
    </>
  );
};

export default Header;
