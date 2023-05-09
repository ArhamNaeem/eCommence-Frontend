import { useMemo, useState } from "react";
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

interface propType {
  type?: string;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setProductInfo: React.Dispatch<React.SetStateAction<productType | undefined>>;
}

const Products = (props: propType) => {
  const { getProducts } = useGetProducts();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => getProducts(pageParam, props.type || ""),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nbHits == 12 ? pages.length + 1 : undefined;
    },
  });
 const [showAlert,setShowAlert] = useState(true)
    return status === 'loading' ? (
      <p>Loading...</p>
    ) : status === 'error' ? (
      <Alert msg='Error Occurred' showAlert={showAlert} setShowAlert={setShowAlert} />
    ) : (
    <>
      {data &&
        data.pages
          .flatMap((page) => page.data)
          .map((product: productType, index: number) => (
            <ProductsDisplay key={index} setClicked = {props.setClicked} setProductInfo = {props.setProductInfo} product={product} />
          ))}
      <div>
        <button
          onClick={() => {
            fetchNextPage();
          }}
          hidden={!hasNextPage}
          disabled={isFetchingNextPage}
          className="bg-black text-2xl text-white font-semibold p-3 my-2"
        >
         Load More
        </button>
      </div>
      {/* <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div> */}
    </>
    )
};

export default Products;
