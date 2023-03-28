import { motion } from "framer-motion";
import React from "react";

const BusinessDescription = () => {
  return (
    <>
      <div className="relative h-vh-120 p-10 bg-black bg-opacity-30 text-8xl">
        <h1 className="relative text-5xl left-5 font-bold text-white text-shadow-200 tracking-tight">
          <span className="inline-block">Rising</span>
          <span className="  inline-block mx-4 pb-2 relative">
            Ecommerce
            <span className="classX absolute bottom-0 left-0 w-full h-1 bg-slate-700"></span>
          </span>
          <span className="inline-block">Store</span>
        </h1>

        <motion.div
          animate={{
            y: [0, 75, 0],
            transition: {
              duration: 30,
              repeat: Infinity,
            },
          }}
          className="md:visible md:relative md:mt-16 md:right-1 lg:right-8 md:h-1/2 md:w-full "
        >
          <img
            className="absolute h-9/10 shadow-2xl shadow-black w-3/10 right-5 top-32 hover:scale-105 transition-all duration-500 opacity-75"
            src="https://www.iotacommunications.com/wp-content/uploads/2019/03/Benchmarking-Commercial-Building-Energy-Use-Per-Square-Foot.jpg"
            alt=""
          />
          <img
            className="absolute h-17/20 w-3/10 right-32 shadow-2xl shadow-black hover:scale-105 transition-all duration-500 opacity-90"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </motion.div>

        <div
          className="flex items-center overflow-auto bg-gradient-to-bl   rounded-tl-none from-gray-400 to-gray-300 bg-opacity-10 p-6 shadow-lg h-3/4 md:h-4/5 shadow-slate-600 rounded-lg  md:top-28  md:left-10  text-slate-800 
        md:absolute
        md:w-2/5"
        >
          <p className=" text-2xl md:text-lg  h-full">
            "At VibeKart, we believe that the success of our business is tied to
            the success of our sellers and the satisfaction of our customers.
            That's why we've made it our mission to provide the best possible
            experience for both. As a seller on our platform, you'll have access
            to a range of tools and resources to help you grow your business,
            from easy-to-use listing and inventory management features to
            marketing and advertising opportunities. And as a customer, you'll
            enjoy a seamless and enjoyable shopping experience, with clear and
            detailed product descriptions, fast and reliable shipping, and
            responsive customer support. We're proud to be a rising star in the
            ecommerce world and will continue to focus on delivering the best
            possible experience for everyone who uses our platform. Our
            commitment to our sellers and customers is unwavering, and we're
            constantly working to improve our platform and services to better
            meet their needs. Whether you're a seller looking to grow your
            business or a customer looking for a great shopping experience, you
            can count on VibeKart to deliver."
          </p>
        </div>
      </div>
    </>
  );
};

export default BusinessDescription;
