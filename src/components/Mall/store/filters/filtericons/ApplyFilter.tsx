import React from "react";
import useHandleFilterLogic from "../../../../../hooks/useHandleFilterLogic";
import FilterIcons from "./FilterIcons";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}

type filterPropType = {
  filters: filterType;
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
  setPriceOrder: React.Dispatch<React.SetStateAction<string>>;
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const ApplyFilter = (props: filterPropType) => {
  const { filters, setPriceOrder, setSizes, setColors } = props;
  const { removeFilter } = useHandleFilterLogic(
    props.filters,
    props.setFilters
  ); 

  return (
  
    <>
      {props.filters["category"] && (
        <FilterIcons
          filterName="category"
          filterValue={filters["category"]}
          removeFilter={removeFilter}
        />
      )}
      {props.filters["priceOrder"] && (
        <FilterIcons
          filterName="priceOrder"
          filterValue={filters['priceOrder']}
          removeFilter={removeFilter}   
          setPriceOrder = {setPriceOrder}
        />
      )}
      {props.filters["size"] &&
        props.filters["size"].map((size, index) => (
          <FilterIcons
            key={index}
            filterName="size"
            filterValue={size}
            removeFilter={removeFilter}
            setSizes={setSizes}
          />
       ))}
      {props.filters["color"] &&
        props.filters["color"].map((color, index) => (
          <FilterIcons
            filterName="color"
            filterValue={color}
            removeFilter={removeFilter}
            setColors={setColors}
          />
    ))}
    </>
  );
};

export default ApplyFilter;
