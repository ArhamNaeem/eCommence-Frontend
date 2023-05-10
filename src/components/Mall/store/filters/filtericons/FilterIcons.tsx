import React from "react";

const FilterIcons = (props: any) => {
  const { filterName, filterValue, removeFilter } = props;
  return (
    <>
      <span className="mx-2 mb-3 inline-block max-w-fit bg-white text-sm shadow-xl  h-10 w-full text-black p-2 rounded-lg">
        {filterValue}
        <button onClick={(e) => {
          removeFilter(e, filterName, filterValue)
          if (filterName === 'priceOrder') {
            props.setPriceOrder("")
          } else if (filterName === "size") {
             props.setSizes((prev:string[]) => prev.filter((sz) => sz != filterValue));
          } else if (filterName === "color") {
              props.setColors((prev:string[]) => prev.filter((clr) => clr != filterValue));
          }
        }}
         className="ml-1 pb-[2px] font-bold hover:bg-slate-200  rounded-full w-5 ">
          &times;
        </button>
      </span>
    </>
  );
};

export default FilterIcons;
