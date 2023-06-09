import { useEffect, useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetProducts } from "../../hooks/api/useGetProducts";
import { ProductsDisplay } from "./ProductsDisplay";
import Alert from "./Alert";

interface productType {
  category: string;
  cloth_type?: string;
  shoe_type?: string;
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
interface filterType {
  category?: string;
  priceOrder?: string;
  size?: string[];
  color?: string[];
}
interface propType {
  type?: string;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setProductInfo: React.Dispatch<React.SetStateAction<productType | undefined>>;
  filters?: filterType;
}



const Products = (props: propType) => {
  const [options,setOptions]= useState<filterType>({});
  useEffect(() => {
if(props.filters){
  const newOptions = {
    category: props.filters.category? props.filters.category.slice(10):undefined,
    priceOrder: props.filters.priceOrder? props.filters.priceOrder==='High-Low'?'-1':'1':undefined,
    ...(props.filters.size && props.filters.size.length > 0 ? {size: props.filters.size} : {}),
    ...(props.filters.color && props.filters.color.length > 0 ? {color: props.filters.color} : {}) 
  }
  setOptions(newOptions)
}
      
  }, [props.filters]);
  const { getAllProducts, getFilteredProducts } = useGetProducts();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["posts",options],
      queryFn: ({ pageParam = 1 }) => {
        return props.type
          ? getFilteredProducts(pageParam, { type: props.type,...options })
          : getAllProducts(pageParam);
      },
      getNextPageParam: (lastPage, pages) => {
        return  lastPage?.nbHits == 12 ? pages.length + 1 : undefined;
      },
      retry:3
    });
  const [showAlert, setShowAlert] = useState(true);
  return status === "loading" ? (
    <p className="font-bold text-5xl relative left-[40vw]">Loading...</p>
  ) : status === "error" ? (
    <Alert
      msg="Error Occurred"
      showAlert={showAlert}
      setShowAlert={setShowAlert}
    />
  ) :(
    <>
      { data?.pages?.flatMap((page) => page?.data)?.map((product: productType, index: number) => (
            <ProductsDisplay
              key={index}
              setClicked={props.setClicked}
              setProductInfo={props.setProductInfo}
              product={product}
            />
          ))}
      <div>
        <button
          onClick={() => {
            fetchNextPage();
          }}
          hidden={!hasNextPage}
          disabled={isFetchingNextPage}
          className="bg-black text-2xl transition-all duration-150 rounded-sm relative border border-black 
          left-[40vw]  text-white font-semibold py-3 px-8  my-8 hover:scale-105 "
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Products;
