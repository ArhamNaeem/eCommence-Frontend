import React from 'react'
import Footer from '../Home/Footer';
import AllProducts from './sections/AllProducts';
import FreeDelivery from './sections/FreeDelivery';
import Navbar from './Navbar';
import Products from './sections/Products';

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
