import React, { useEffect } from 'react'
import Filters from '../filters/Filters'

const FurnitureStore = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <h1 className="w-3/4 left-1/4 p-3 text-center font-bold  absolute text-7xl text-slate-900  ">
        FURNITURE
      </h1>
      <Filters enum="Furnitures" />
    </>
  );
}

export default FurnitureStore
