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

const useGetProducts = (type: string) => {
  const [productData, setProductData] = useState<productType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getAllProducts = async () => {};
  const getAProduct = async (type: string) => {
    try {
      const data = await axios.get(
        `http://localhost:3000/api/v1/products/?page=${pageNumber}&type=${type}`
      );
      const { data: products } = data.data;
      setProductData(products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      await getAProduct(type);
    })();
  }, []);

  return { productData};
};

export default useGetProducts;
