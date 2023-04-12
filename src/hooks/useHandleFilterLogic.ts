import React, { Dispatch, SetStateAction } from "react";

interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}

const useHandleFilterLogic = (
  filters: filterType,
  setFilters: Dispatch<SetStateAction<filterType>>
) => {
  const categoryFilter = (cloth: string) => {
    setFilters({ ...filters, category: cloth });
  };

  const priceFilter = (
    order: string,
    setPriceOrder: Dispatch<SetStateAction<string>>
  ) => {
    setPriceOrder((priceOrder) => order);
    setFilters({ ...filters, priceOrder: order });
  };
  const sizeFilter = (
    e: React.MouseEvent<HTMLInputElement>,
    size: string,
    setSizes: Dispatch<SetStateAction<string[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      setSizes((prev) => [...prev, size]);
      const sizes = filters.size;
      setFilters({ ...filters, size: sizes ? [...sizes, size] : [size] });
    } else {
      setSizes((prev) => prev.filter((sz) => sz != size));
      const newFilter = filters["size"]?.filter((sz) => sz != size);
      newFilter && setFilters({ ...filters, size: [...newFilter] });
    }
  };
  const colorFilter = (
    e: React.MouseEvent<HTMLInputElement>,
    color: string,
    setColors: Dispatch<SetStateAction<string[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      setColors((prev) => [...prev, color]);
      const colors = filters.color;
      setFilters({ ...filters, color: colors ? [...colors, color] : [color] });
    } else {
      setColors((prev) => prev.filter((clr) => clr != color));
      const newFilter = filters["color"]?.filter((clr) => clr != color);
      newFilter && setFilters({ ...filters, color: [...newFilter] });
    }
  };
  const removeFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    filter: string,
    value: string
  ) => {
    let newFilter: string[] | string = "";
    if (filter === "size" || filter === "color") {
      newFilter = filters[filter]?.filter((val) => val != value) || "";
    }
    setFilters({
      ...filters,
      [filter]: newFilter,
    });
  };


  return { categoryFilter, priceFilter, removeFilter, sizeFilter, colorFilter };
};

export default useHandleFilterLogic;
