import React from "react";

const ApplianceFilter = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <h1 className="text-lg font-semibold">Kitchen</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Refrigerators
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Freezers
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Ovens
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Microwaves
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dishwashers
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Laundary</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Washing machines
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dryers
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Combination washer/dryers
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Cleaning</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Vacuum cleaners
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Steam cleaners
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Carpet cleaners
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
};

export default ApplianceFilter;
