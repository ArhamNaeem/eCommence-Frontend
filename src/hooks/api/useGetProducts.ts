import axios from "axios";
interface optionsType {
  type: string;
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}
export const useGetProducts = () => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/products",
  });

  const getAllProducts = async (pageParam = 1) => {
    try {
      const response = await instance.get(`/?page=${pageParam}`);
      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  };

const getFilteredProducts = async (pageParam = 1, { type, category, priceOrder, size, color }: optionsType = { type: '' }) => {
  try {
    const optionString = `type=${type}${category ? `&category=${category}` : ''}${priceOrder ? `&priceOrder=${priceOrder}` : ''}${size ? `&size=${size.join(',')}` : ''}${color ? `&color=${color.join(',')}` : ''}`;

    const response = await instance.get(`/?page=${pageParam}&${optionString}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

  

  return { getAllProducts,getFilteredProducts };
};
