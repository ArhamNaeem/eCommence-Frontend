import React from "react";
import useHandleFilterLogic from "../../../../hooks/useHandleFilterLogic";
interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
};
const ShoesFilter = (props: filterPropType) => {
  const { categoryFilter, sizeFilter, } =
    useHandleFilterLogic(props.filters, props.setFilters);
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <li
            onClick={() => categoryFilter("Category: Sneakers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Sneakers
          </li>
          <li
            onClick={() => categoryFilter("Category: Dress Shoes")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Dress Shoes
          </li>
          <li
            onClick={() => categoryFilter("Category: Loafers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Loafers
          </li>
          <li
            onClick={() => categoryFilter("Category: Scandals")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Scandals
          </li>
          <li
            onClick={() => categoryFilter("Category: Flats")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Flats
          </li>
          <li
            onClick={() => categoryFilter("Category: Sports Shoes")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Sports Shoes
          </li>
          <li
            onClick={() => categoryFilter("Category: Heels")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Heels
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-3">Size</h1>
        <ul className="text-sm ml-3">
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "38", props.setSizes);
              }}
              checked={props.sizes.includes("38")}
              readOnly
              type="checkbox"
              id="38"
              className="mx-2"
            />
            <label htmlFor="38">38</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "39", props.setSizes);
              }}
              checked={props.sizes.includes("39")}
              type="checkbox"
              readOnly
              id="39"
              className="mx-2"
            />
            <label htmlFor="39">39</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "40", props.setSizes);
              }}
              checked={props.sizes.includes("40")}
              type="checkbox"
              readOnly
              id="40"
              className="mx-2"
            />
            <label htmlFor="40">40</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "41", props.setSizes);
              }}
              checked={props.sizes.includes("41")}
              type="checkbox"
              readOnly
              id="41"
              className="mx-2"
            />
            <label htmlFor="41">41</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "42", props.setSizes);
              }}
              checked={props.sizes.includes("42")}
              type="checkbox"
              readOnly
              id="42"
              className="mx-2"
            />
            <label htmlFor="42">42</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "43", props.setSizes);
              }}
              checked={props.sizes.includes("43")}
              type="checkbox"
              readOnly
              id="43"
              className="mx-2"
            />
            <label htmlFor="43">43</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "44", props.setSizes);
              }}
              checked={props.sizes.includes("44")}
              type="checkbox"
              readOnly
              id="44"
              className="mx-2"
            />
            <label htmlFor="44">44</label>
          </li>
          <li className="my-1 hover:text-slate-300 flex transition-colors duration-300">
            <input
              onClick={(e) => {
                sizeFilter(e, "45", props.setSizes);
              }}
              checked={props.sizes.includes("45")}
              type="checkbox"
              readOnly
              id="45"
              className="mx-2"
            />
            <label htmlFor="45">45</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShoesFilter;
