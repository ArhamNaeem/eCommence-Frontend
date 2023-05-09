import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetProducts } from "../../hooks/api/useGetProducts";
import { ProductsDisplay } from "./ProductsDisplay";

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
    error,
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
  return (
    <>
      {data &&
        data.pages
          .flatMap((page) => page.data)
          .map((product: productType, index: number) => (
            <ProductsDisplay key={index} product={product} />
          ))}
      <div>
        <button
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Products;
