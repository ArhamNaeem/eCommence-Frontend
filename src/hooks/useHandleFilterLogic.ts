import React, { Dispatch, SetStateAction } from "react";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string;
  color?: string;
}

const useHandleFilterLogic = (
  filters: filterType,
  setFilters: Dispatch<SetStateAction<filterType>>
) => {
  const clothFilter = (cloth: string) => {
    setFilters({ ...filters, category: cloth });
  };

  const priceFilter = (order: string) => {
    setFilters({ ...filters, priceOrder: order });
  };
  const sizeFilter = ( size: string) => {
    setFilters({ ...filters, size: size });
  };
  const colorFilter = ( color: string) => {
    {
      setFilters({ ...filters, color: color });
    }
  };
  const removeFilter = (e: any, filter: string) => {
    // if (e.target.checked) {
    //   e.target.checked = false;
    // }
    
    setFilters({
      ...filters,
      [filter]: "",
    });
  };

  return { clothFilter, priceFilter, removeFilter, sizeFilter, colorFilter };
};

export default useHandleFilterLogic;
