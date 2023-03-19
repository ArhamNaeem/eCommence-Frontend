import React from 'react'

const CosmeticsFilter = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <h1 className="text-lg font-semibold">Face</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Foundation
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Blush
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Highlighter
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Concealer
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Eyes</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Mascara
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Eyeliner
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Eyeshadow
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Lips</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Lipstick
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Lip gloss
          </li>
        </ul>
        <ul className="text-sm ml-5 mt-4 ">
          <h1 className="text-lg font-semibold">Skincare</h1>

          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Cleanser
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Moisturizer
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Serum
          </li>
          <li className="my-1 hover:text-slate-300  transition-colors duration-300">
            Toner
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

export default CosmeticsFilter
