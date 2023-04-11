import { MouseEventHandler, useState } from "react";
import useHandleFilterLogic from "../../../../hooks/useHandleFilterLogic";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[] ;
  color?: string[];
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
  priceOrder: string;
  setPriceOrder: React.Dispatch<React.SetStateAction<string>>;
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
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
            onClick={() => clothFilter("Category: Men Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Shirts
          </li>
          <li
            onClick={() => clothFilter("Category: Men T-Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men T-Shirts
          </li>
          <li
            onClick={() => clothFilter("Category: Men Trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Trousers
          </li>
          <li
            onClick={() => clothFilter("Category: Men Jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men Jeans
          </li>
          <li
            onClick={() => clothFilter("Category: Women T-Shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women T-Shirts
          </li>
          <li
            onClick={() => clothFilter("Category: Women Jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women Jeans
          </li>
          <li
            onClick={() => clothFilter("Category: Women Trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women Trousers
          </li>
          <li
            onClick={() => clothFilter("Category: Women Dresses")}
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
                priceFilter("High-Low", props.setPriceOrder);
              }}
              type="radio"
              name="price"
              id="hightolow"
              className="mx-2"
              checked={props.priceOrder === "High-Low"}
            />
            <label htmlFor="hightolow">High - Low</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={() => priceFilter("Low-High", props.setPriceOrder)}
              type="radio"
              name="price"
              id="lowtohigh"
              checked={props.priceOrder === "Low-High"}
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
              onClick={(e) => {
                sizeFilter(e, "Small", props.setSizes);
              }}
              type="checkbox"
              id="small"
              className="mx-2"
              checked={props.sizes.includes("Small")}
            />
            <label htmlFor="small">Small</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={(e) => {
                sizeFilter(e, "Medium", props.setSizes);
              }}
              type="checkbox"
              id="medium"
              className="mx-2"
              checked={props.sizes.includes("Medium")}
            />
            <label htmlFor="medium">Medium</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={(e) => {
                sizeFilter(e, "Large", props.setSizes);
              }}
              type="checkbox"
              id="large"
              className="mx-2"
              checked={props.sizes.includes("Large")}
            />
            <label htmlFor="large">Large</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={(e) => {
                sizeFilter(e, "XL", props.setSizes);
              }}
              type="checkbox"
              id="xl"
              className="mx-2"
              checked={props.sizes.includes("XL")}
            />
            <label htmlFor="xl">XL</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="size"
              onClick={(e) => {
                sizeFilter(e, "XXL", props.setSizes);
              }}
              type="checkbox"
              id="xxl"
              className="mx-2"
              checked={props.sizes.includes("XXL")}
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
              onClick={(e) => {
                colorFilter(e, "White",props.setColors);
              }}
              checked={props.colors.includes("White")}
              type="checkbox"
              id="white"
              className="mx-2"
            />
            <label htmlFor="white">White</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Red",props.setColors);
              }}
              checked={props.colors.includes("Red")}
              type="checkbox"
              id="red"
              className="mx-2"
            />
            <label htmlFor="red">Red</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Black",props.setColors);
              }}
              checked={props.colors.includes("Black")}
              type="checkbox"
              id="black"
              className="mx-2"
            />
            <label htmlFor="black">Black</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Blue",props.setColors);
              }}
              checked={props.colors.includes("Blue")}
              type="checkbox"
              id="blue"
              className="mx-2"
            />
            <label htmlFor="blue">Blue</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Purple",props.setColors);
              }}
              checked={props.colors.includes("Purple")}
              type="checkbox"
              id="purple"
              className="mx-2"
            />
            <label htmlFor="purple">Purple</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              checked={props.colors.includes("Green")}
              onClick={(e) => {
                colorFilter(e, "Green",props.setColors);
              }}
              type="checkbox"
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
