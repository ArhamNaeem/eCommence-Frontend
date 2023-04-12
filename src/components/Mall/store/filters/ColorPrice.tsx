import React from "react";
import useHandleFilterLogic from "../../../../hooks/useHandleFilterLogic";

interface filterType {
  priceOrder?: string;
  color?: string[];
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
  priceOrder: string;
  setPriceOrder: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const ColorPrice = (props: filterPropType) => {
  const { colorFilter, priceFilter } = useHandleFilterLogic(
    props.filters,
    props.setFilters
  );
  return (
    <>
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
              readOnly
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
              readOnly
              className="mx-2"
            />
            <label htmlFor="lowtohigh">Low - High</label>
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
                colorFilter(e, "White", props.setColors);
              }}
              checked={props.colors.includes("White")}
              type="checkbox"
              id="white"
              readOnly
              className="mx-2"
            />
            <label htmlFor="white">White</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Red", props.setColors);
              }}
              checked={props.colors.includes("Red")}
              type="checkbox"
              readOnly
              id="red"
              className="mx-2"
            />
            <label htmlFor="red">Red</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Black", props.setColors);
              }}
              checked={props.colors.includes("Black")}
              type="checkbox"
              id="black"
              readOnly
              className="mx-2"
            />
            <label htmlFor="black">Black</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Blue", props.setColors);
              }}
              checked={props.colors.includes("Blue")}
              type="checkbox"
              id="blue"
              readOnly
              className="mx-2"
            />
            <label htmlFor="blue">Blue</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Purple", props.setColors);
              }}
              checked={props.colors.includes("Purple")}
              type="checkbox"
              id="purple"
              className="mx-2"
              readOnly
            />
            <label htmlFor="purple">Purple</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              name="color"
              onClick={(e) => {
                colorFilter(e, "Green", props.setColors);
              }}
              type="checkbox"
              readOnly
              checked={props.colors.includes("Green")}
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

export default ColorPrice;
