import { lazy, Suspense, useRef } from "react";
import { useHandleLoading } from "../../hooks/useHandleLoading";
const ProductDisplay = lazy(() => import("./sections/ProductDisplay"));
const SellersThoughts = lazy(() => import("./sections/SellersThoughts"));
const BusinessDescription = lazy(
  () => import("./sections/BusinessDescription")
);
import Footer from "./Footer";
import Main from "./Main";

const Header = () => {


  return (
    <>
      <Main/>
      <Suspense fallback="loading">
        <ProductDisplay  />
        <SellersThoughts />
        <BusinessDescription />
        <Footer />
      </Suspense>
    </>
  );
};

export default Header;
