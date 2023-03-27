import React from 'react'

const DecorationFilters = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <h2 className="text-lg font-semibold">Wall</h2>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Clocks
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Mirrors
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Paintings
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h2 className="text-lg font-semibold">Table</h2>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Table Vases
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Table Lamps
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Candles
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h2 className="text-lg font-semibold">Floor</h2>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Area Rugs
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Floor Vases
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            floor Lamps
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h2 className="text-lg font-semibold">Seasonal </h2>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Wreaths
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Christmas Lights
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Ornaments
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Spring Flowers
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Fall Leaves
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
    </div>
  );
}

export default DecorationFilters
