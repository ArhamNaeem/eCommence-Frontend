import React from 'react'

const FreeDelivery = () => {
  return (
    <>
      <div className="bg-black relative bg-opacity-20 h-vh-75 w-full grid grid-row-2 md:grid-cols-2 text-slate-900">
        <div className="md:ml-4 p-20    h-full w-full  flex flex-col items-center  justify-center ">
          <h1 className=" text-6xl my-2  font-bold text-center ">FREE DELIVERY</h1>
          <p className="text-slate-800 text-lg border-b border-black text-center py-3 md:bg-transparent  bg-white bg-opacity-20 ">
            No need to worry about shipping fees! VibeKart offers free delivery
            on all orders in Pakistan.
          </p>
        </div>
        <div className="absolute -z-10 -top-10 opacity-80  md:z-0 md:static text-center h-full w-full flex flex-col justify-center items-center">
          <img
            src="https://media.istockphoto.com/id/1366040332/photo/shopping-online-with-phone.jpg?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=LIAbxwcno_5Eg48hA0WG3tfAy24Na9XjwWJ5dvZDRuQ="
            alt="image"
            className="opacity-90 h-2/3 mt-20 mb-2 rounded-lg shadow-xl"
          />
          <p className="text-slate-800 font-semibold">
            Order from anywhere in Pakistan!
          </p>
        </div>
      </div>
    </>
  );
}

export default FreeDelivery
