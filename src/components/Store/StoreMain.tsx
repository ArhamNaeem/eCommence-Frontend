import React from 'react'
import Footer from '../Home/Footer';
import AllProducts from './AllProducts';
import FreeDelivery from './FreeDelivery';
import Navbar from './Navbar';
import Products from './Products';

const StoreMain = () => {
  return (
    <>
      <Navbar />
      <FreeDelivery />
      <Products />
      <AllProducts />
      <Footer/>
    </>
  );
}

export default StoreMain
