import React from "react";
import useHandleFilterLogic from "../../../../hooks/useHandleFilterLogic";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string;
  color?: string;
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
};

const ApplyFilter = (props: filterPropType) => {
  const filters = ["category", "placeOrder", "size", "color"];
  const {removeFilter} = useHandleFilterLogic(props.filters,props.setFilters)
  return (
    <>
      {props.filters["category"] && (
        <span className="mx-2 bg-white text-sm shadow-xl  h-10 w-full text-black p-2 rounded-lg">
          {props.filters["category"]}
          <button
            // onClick={() => removeFilter("category")}
            className="ml-1 font-bold "
          >
            &times;
          </button>
        </span>
      )}
      {props.filters["priceOrder"] && (
        <span className="mx-2 bg-white text-sm shadow-xl  h-10 w-full text-black p-2 rounded-lg">
          {props.filters["priceOrder"]}
          <button
            onClick={(e) => removeFilter(e,"priceOrder")}
            className="ml-1 font-bold "
          >
            &times;
          </button>
        </span>
      )}
      {props.filters["size"] && (
        <span className="mx-2 bg-white text-sm shadow-xl  h-10 w-full text-black p-2 rounded-lg">
          {props.filters["size"]}
          <button
            // onClick={() => removeFilter("size")}
            className="ml-1 font-bold "
          >
            &times;
          </button>
        </span>
      )}
      {props.filters["color"] && (
        <span className="mx-2 bg-white text-sm shadow-xl  h-10 w-full text-black p-2 rounded-lg">
          {props.filters["color"]}
          <button
            // onClick={() => removeFilter("color")}
            className="ml-1 font-bold "
          >
            &times;
          </button>
        </span>
      )}
    </>
  );
};

export default ApplyFilter;
