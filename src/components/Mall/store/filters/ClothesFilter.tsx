import React from 'react'

const ClothesFilter = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Men Shirts
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Men T-Shirts
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Men Trousers
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Men Jeans
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Women T-Shirts
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Women Jeans
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Women Trousers
          </li>
          <li className="my-1 hover:text-slate-200  transition-colors duration-300">
            Women Dresses
          </li>
        </ul>
      </div>
      <div className="mt-6">
              <h1 className="text-2xl font-semibold mb-3">Price</h1>
        <ul className="text-sm ml-3">
              
        <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
          <input type="radio" name="price" id="hightolow" className="mx-2" />
          <label htmlFor="hightolow">High - Low</label>
              </li>
        <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
          <input type="radio" name="price" id="lowtohigh" className="mx-2" />
          <label htmlFor="lowtohigh">Low - High</label>
                  </li>
                  </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Size</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="small" className="mx-2" />
            <label htmlFor="small">Small</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="medium" className="mx-2" />
            <label htmlFor="medium">Medium</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="large" className="mx-2" />
            <label htmlFor="large">Large</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="xl" className="mx-2" />
            <label htmlFor="xl">XL</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="xxl" className="mx-2" />
            <label htmlFor="xxl">XXL</label>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Color</h1>

        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="white" className="mx-2" />
            <label htmlFor="white">White</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="red" className="mx-2" />
            <label htmlFor="red">Red</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="black" className="mx-2" />
            <label htmlFor="black">Black</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="blue" className="mx-2" />
            <label htmlFor="blue">Blue</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="purple" className="mx-2" />
            <label htmlFor="purple">Purple</label>
          </li>
          <li className="my-1 hover:text-slate-200 flex transition-colors duration-300">
            <input type="checkbox" id="green" className="mx-2" />
            <label htmlFor="green">Green</label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ClothesFilter
