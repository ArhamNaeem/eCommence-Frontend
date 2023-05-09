import axios from "axios";
export const useGetProducts = () => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/products",
  });

  const getProducts = async ( pageParam = 1 , type: string) => {
    try {
      const response = await instance.get(`/?page=${pageParam}&type=${type}`);
      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return {getProducts}
};
