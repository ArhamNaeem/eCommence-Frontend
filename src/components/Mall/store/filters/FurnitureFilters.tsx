import React from 'react'

const FurnitureFilters = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <h1 className="text-lg font-semibold">Living Room</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Sofas
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Chairs
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Side tables
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            TV stands
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Dining Room</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dining tables
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dining chairs
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Buffets
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Bar stools
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Bedroom</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Beds
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Headboards
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Vanities
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dressers
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Office</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Desks
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Filing cabinets
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Bookcases
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Price</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="radio" name="price" id="hightolow" className="mx-2" />
            <label htmlFor="hightolow">High - Low</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="radio" name="price" id="lowtohigh" className="mx-2" />
            <label htmlFor="lowtohigh">Low - High</label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FurnitureFilters
