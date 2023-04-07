import { useState } from "react";
import useHandleFilterLogic from "../../../../hooks/useHandleFilterLogic";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string ;
  color?: string;
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
};

const ClothesFilter = (props: filterPropType) => {
  const { clothFilter, priceFilter, sizeFilter ,colorFilter} = useHandleFilterLogic(
    props.filters,
    props.setFilters
  );
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <li
            onClick={() => clothFilter("Men Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Shirts
          </li>
          <li
            onClick={() => clothFilter("Men T-Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men T-Shirts
          </li>
          <li
            onClick={() => clothFilter("Men Trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Trousers
          </li>
          <li
            onClick={() => clothFilter("Men Jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Jeans
          </li>
          <li
            onClick={() => clothFilter("Women T-Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women T-Shirts
          </li>
          <li
            onClick={() => clothFilter("Women Jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women Jeans
          </li>
          <li
            onClick={() => clothFilter("Women Trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women Trousers
          </li>
          <li
            onClick={() => clothFilter("Women Dresses")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women Dresses
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Price</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={() => {
                priceFilter("High-Low");
              }}
              type="radio"
              name="price"
              id="hightolow"
              className="mx-2"
            />
            <label htmlFor="hightolow">High - Low</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={() => priceFilter("Low-High")}
              type="radio"
              name="price"
              id="lowtohigh"
              className="mx-2"
            />
            <label htmlFor="lowtohigh">Low - High</label>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Size</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={() => {
                sizeFilter("Small");
              }}
              type="radio"
              id="small"
              className="mx-2"
            />
            <label htmlFor="small">Small</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={() => {
                sizeFilter("Medium");
              }}
              type="radio"
              id="medium"
              className="mx-2"
            />
            <label htmlFor="medium">Medium</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={() => {
                sizeFilter("Large");
              }}
              type="radio"
              id="large"
              className="mx-2"
            />
            <label htmlFor="large">Large</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={() => {
                sizeFilter("XL");
              }}
              type="radio"
              id="xl"
              className="mx-2"
            />
            <label htmlFor="xl">XL</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={() => {
                sizeFilter("XXL");
              }}
              type="radio"
              id="xxl"
              className="mx-2"
            />
            <label htmlFor="xxl">XXL</label>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Color</h1>

        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("White");
              }}
              type="radio"
              id="white"
              className="mx-2"
            />
            <label htmlFor="white">White</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("Red");
              }}
              type="radio"
              id="red"
              className="mx-2"
            />
            <label htmlFor="red">Red</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("Black");
              }}
              type="radio"
              id="black"
              className="mx-2"
            />
            <label htmlFor="black">Black</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("Blue");
              }}
              type="radio"
              id="blue"
              className="mx-2"
            />
            <label htmlFor="blue">Blue</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("Purple");
              }}
              type="radio"
              id="purple"
              className="mx-2"
            />
            <label htmlFor="purple">Purple</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={() => {
                colorFilter("Green");
              }}
              type="radio"
              id="green"
              className="mx-2"
            />
            <label htmlFor="green">Green</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClothesFilter;
