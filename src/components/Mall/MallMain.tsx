import React from 'react'
import Footer from '../Home/Footer';
import FreeDelivery from './sections/FreeDelivery';
import Navbar from './Navbar';
import Products from './sections/Products';


const MallMain = () => {
  return (
    <>
      <Navbar />
      <FreeDelivery />
      <Products />
      <Footer/>
    </>
  );
}

export default MallMain
