import axios from "axios";
import React, { useEffect, useState } from "react";

interface productType {
  category: string;
  cloth_type: string;
  color: string[];
  createdAt: Date;
  description: string;
  img_url: string;
  price: Record<string, string>;
  quantity: number;
  size: number[];
  updatedAt: Date;
  __v: number;
  _id: string;
}

const useGetProducts = () => {
  const [productData, setProductData] = useState<productType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getAllProducts = async () => {};
  const fetchData = async () => {
    setPageNumber((pageNumber) => pageNumber + 1);
    const data = await axios.get(
      `http://localhost:3000/api/v1/products/?page=${pageNumber}`
    );
    const { data: products } = data.data;
    setProductData(prev => [...prev,products]);
  };
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/v1/products/?page=${pageNumber}`
        );
        const { data: products } = data.data;
        setProductData(products);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return { productData,fetchData,setProductData };
};

export default useGetProducts;
