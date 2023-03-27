import React from 'react'
//make its type an enum which will accept any valid type of products to call a valid api
const ProductsFromDB = (props:any) => {
  return (
    <>
      <div className=" border border-black flex flex-col  items-center  p-3 absolute m-10 h-96  w-80">
        {/* <img src="" alt=""  className=' h-1/2 w-4/5'/> */}
        <div className='border border-black h-64 mb-10 w-72'></div>
        <p>Products</p>
        <p>Price:5000</p>
      </div>
    </>
  );
}
 
export default ProductsFromDB
