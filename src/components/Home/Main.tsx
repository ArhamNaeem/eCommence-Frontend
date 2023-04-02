import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useGetImage from '../../hooks/useGetImage';
import { useHandleLoading } from '../../hooks/useHandleLoading';
import Logo from '../../utils/Logo';

const Main = () => {

      const { img } = useGetImage();
      const navigate = useNavigate();

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
        <header className=" h-screen ">
          <motion.img
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
            src={img}
            loading="lazy"
            className="absolute top-0 h-full shadow-inner shadow-black w-full opacity-90 overflow-hidden"
          />
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
            onClick={() => navigate("/mall")}
            className="absolute top-1/4 left-28  border border-black rounded-md p-6"
          >
            Shop Now
          </button>

          <div className="h-full  relative -bottom-20 z-20 flex items-center justify-center text-sm lg:text-xl text-white  text-shadow-100 ml-10">
                    <p
                        aria-label='Loading messsages'
                        role='status'
                        className=" w-3/4 backdrop-blur-sm bg-opacity-5 bg-black justify-center text-center p-3 ">
              {text}
              <Cursor />
            </p>
          </div>
        </header>
      </>
    );
}

export default Main
