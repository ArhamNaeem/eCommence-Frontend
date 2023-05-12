import axios from "axios";
interface optionsType {
  type: string;
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}
const SIZES :Record<string,string> = {
  Small: '1',
  Medium: '2',
  Large: '3',
  XL: '4',
  XXL: '5',
 '38':'38',
  '39':'39',
  '40':'40',
  '41':'41',
  '42':'42',
  '43':'43',
  '44':'44',
  '45':'45',

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
      console.log('error Occurred',e);
    }
  };

const getFilteredProducts = async (pageParam = 1, { type, category, priceOrder, size, color }: optionsType = { type: '' }) => {
  try {
   
    const optionString = `type=${type}${category ? `&category=${category}` : ''}${priceOrder ? `&sortOrder=${priceOrder}` : ''}${size ? `&size=${size.map((sz)=>SIZES[sz]).join(',')}` : ''}${color ? `&color=${color.map((clr)=>clr.toLowerCase()).join(',')}` : ''}`;

    const response = await instance.get(`/?page=${pageParam}&${optionString}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

  

  return { getAllProducts,getFilteredProducts };
};
