import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEnvelope,faPhone,faAddressBook)
import { motion } from "framer-motion";
import React from "react";
import Logo from "../../utils/Logo";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  const footerPStyle1= "ml-14 hover:color:slate-300 my-2 origin-left transition-all duration-300 hover:scale-105"
  const footerPStyle2= "ml-7 hover:color:slate-300 my-2 origin-left transition-all duration-300 hover:scale-105"
  return (
    <>
      <div className="relative flex h-vh-80 w-full bg-black">
        <section className="w-1/2 h-5/6 flex flex-col items-center">
          <div className="flex mt-10 mr-20">
            <Logo
              height={80}
              width={80}
              mr={8}
              mt={1}
              ml={0}
              mb={0}
              textMarginTop={0}
              textSize={"6xl"}
            />
          </div>
          <p className="text-white ml-10 text-sm">
            ULTIMATE SHOPPING DESTINATION
          </p>

          <div className="mt-6 h-full w-2/3 text-center text-white">
            {/* add email */}
            <p>
              Contact us with any questions or feedback and our customer care
              team will be happy to assist you
            </p>

            <p className="mt-8 text-lg ">
              <FontAwesomeIcon icon="envelope" className="mx-2" />
              vibekart@gmail.com
            </p>

            <p className="my-2 text-lg">
              <FontAwesomeIcon icon="phone" className="mx-2" />
              +92-123-4567891
            </p>
            <p className="my-2 text-lg">
              <FontAwesomeIcon icon="address-book" className="mx-2" />
              456 Maple Avenue, Springfield, USA 67890
            </p>
          </div>

          <button
            className="text-white absolute bottom-20 opacity-70 text-lg "
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Scroll to top
          </button>
        </section>

        <section className="mt-7 flex flex-col h-5/6 w-1/2 text-white p-12  text-4xl font-bold">
          <div className="w-full h-full flex">
            <div className="w-full h-full mx-2">
              <h1 className=" border-l-8 ml-10 border-slate-400 pl-3">
                VibeKart
              </h1>
              <div className=" text-xl font-normal mt-4 ">
                <p className={`${footerPStyle1}`}>Who are we</p>
                <p className={`${footerPStyle1}`}>Contact</p>
                <p className={`${footerPStyle1}`}>Our impact</p>
                <p className={`${footerPStyle1}`}>Terms & conditions</p>
                <p className={`${footerPStyle1}`}>Privacy policy</p>
                <p className={`${footerPStyle1}`}>How to shop</p>
              </div>
            </div>
            <div className="w-full h-full mt-1">
              <h1 className="border-l-8 ml-3 border-slate-400 pl-3">
                Work with us
              </h1>
              <div className=" text-xl font-normal mt-5">
                <p className={`${footerPStyle2}`}>Sell with us</p>
                <p className={`${footerPStyle2}`}>How to get started</p>
                <p className={`${footerPStyle2}`}>Partner testimonal</p>
                <p className={`${footerPStyle2}`}>Our Partner support</p>
              </div>
            </div>
          </div>
        </section>

        <footer className=" absolute bottom-5 text-3xl left-1/3 text-white">
          Copyright &#169; {getYear()}. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Footer;
