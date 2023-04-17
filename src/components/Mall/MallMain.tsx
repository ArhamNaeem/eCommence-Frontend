import React, { useEffect } from 'react'
import Footer from '../Home/Footer';
import FreeDelivery from './sections/FreeDelivery';
import Navbar from './Navbar';
import Products from './sections/Products';
import { motion, spring } from 'framer-motion';
import ProductsFromDB from '../data/ProductsFromDB';
 


const MallMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: '0vw' }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <FreeDelivery />
        <Products />
        <div className='relative bg-slate-200 h-full w-full'>
          
          <ProductsFromDB />
          </div>
        {/* <Footer /> */}
      </motion.div>
    </>
  );
}

export default MallMain
