import { MouseEventHandler, useState } from "react";
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

const ClothesFilter = (props: filterPropType) => {
  const { categoryFilter, sizeFilter } =
    useHandleFilterLogic(props.filters, props.setFilters);
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Category</h1>
        <ul className="text-sm ml-5">
          <li
            onClick={() => categoryFilter("Category: Men shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men shirts
          </li>
          <li
            onClick={() => categoryFilter("Category: Men t-shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men t-shirts
          </li>
          <li
            onClick={() => categoryFilter("Category: Men trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men trousers
          </li>
          <li
            onClick={() => categoryFilter("Category: Men jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Men jeans
          </li>
          <li
            onClick={() => categoryFilter("Category: Women t-shirts")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women t-shirts
          </li>
          <li
            onClick={() => categoryFilter("Category: Women jeans")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women jeans
          </li>
          <li
            onClick={() => categoryFilter("Category: Women trousers")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women trousers
          </li>
          <li
            onClick={() => categoryFilter("Category: Women dresses")}
            className="my-1 hover:text-slate-300  transition-colors duration-300"
          >
            Women dresses
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
              readOnly
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
              readOnly
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
              checked={props.sizes.includes("Large")}
              type="checkbox"
              id="large"
              readOnly
              className="mx-2"
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
              readOnly
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
              readOnly
              className="mx-2"
              checked={props.sizes.includes("XXL")}
            />
            <label htmlFor="xxl">XXL</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClothesFilter;
