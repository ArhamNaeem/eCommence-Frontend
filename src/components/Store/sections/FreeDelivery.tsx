import React from 'react'

const FreeDelivery = () => {
  return (
    <>
      <div className="bg-black bg-opacity-20 h-vh-55 text-6xl flex text-slate-900">
        <div className="relative w-3/5">
          <h1 className="absolute top-20 left-40 font-bold ">FREE DELIVERY</h1>
          <p className="text-slate-800 text-lg absolute top-36 left-40  w-1/2 border-b border-black text-center py-3 ">
            No need to worry about shipping fees! VibeKart offers
            free delivery on all orders in Pakistan.
          </p>
        </div>
        <div className='h-full text-lg text-center'>
          <img
            src="https://media.istockphoto.com/id/1366040332/photo/shopping-online-with-phone.jpg?b=1&s=170667a&w=0&k=20&c=LIAbxwcno_5Eg48hA0WG3tfAy24Na9XjwWJ5dvZDRuQ="
            alt="image"
            className="opacity-90 h-3/4 mt-5 mb-2 rounded-lg shadow-xl  "
          />
          <p className='text-slate-800 font-semibold'>Order from anywhere in Pakistan!</p>
        </div>
      </div>
    </>
  );
}

export default FreeDelivery
