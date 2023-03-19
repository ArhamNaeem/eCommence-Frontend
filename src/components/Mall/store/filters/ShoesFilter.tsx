import React from 'react'

const ShoesFilter = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Sneakers
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Dress Shoes
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Loafers
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Scandals
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Flats
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Sports Shoes
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Heels
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
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Size</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="38" className="mx-2" />
            <label htmlFor="38">38</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="39" className="mx-2" />
            <label htmlFor="39">39</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="40" className="mx-2" />
            <label htmlFor="40">40</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="41" className="mx-2" />
            <label htmlFor="41">41</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="42" className="mx-2" />
            <label htmlFor="42">42</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="43" className="mx-2" />
            <label htmlFor="43">43</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="44" className="mx-2" />
            <label htmlFor="44">44</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="45" className="mx-2" />
            <label htmlFor="45">45</label>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Color</h1>

        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="white" className="mx-2" />
            <label htmlFor="white">White</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="red" className="mx-2" />
            <label htmlFor="red">Red</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="black" className="mx-2" />
            <label htmlFor="black">Black</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="blue" className="mx-2" />
            <label htmlFor="blue">Blue</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="purple" className="mx-2" />
            <label htmlFor="purple">Purple</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input type="checkbox" id="green" className="mx-2" />
            <label htmlFor="green">Green</label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShoesFilter
