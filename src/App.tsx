import Header from "./components/Home/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MallMain from "./components/Mall/MallMain";
import ClothStore from "./components/Mall/store/productStore/ClothStore";
import ShoeStore from "./components/Mall/store/productStore/ShoeStore";
import CosmeticStore from "./components/Mall/store/productStore/CosmeticStore";
import ApplianceStore from "./components/Mall/store/productStore/ApplianceStore";
import FurnitureStore from "./components/Mall/store/productStore/FurnitureStore";
import DecorationsStore from "./components/Mall/store/productStore/DecorationsStore";
import Cart from "./components/Mall/cart/Cart";
import SignIn from "./components/Mall/auth/SignIn";
import Register from "./components/Mall/auth/Register";
import { Dispatch, SetStateAction, createContext, useState } from "react";
// import Store from "./components/Mall/store/Store";
interface productType {
  category: string;
  type: string;
  color: string;
  description: string;
  img_url: string;
  price: number;
  quantity: number;
  actualQuantity: number;
  size: number | string;
}
interface ProductContextType {
  itemsSelected: productType[];
  setItemsSelected: Dispatch<SetStateAction<productType[]>>;
  selectedItemQuantity: number[];
  setSelectedItemQuantity: Dispatch<SetStateAction<number[]>>;
  // selectedItemsCount: number;
  // setSelectedItemsCount: Dispatch<SetStateAction<number>>;
}

export const ProductContext = createContext<ProductContextType>({
  itemsSelected: [],
  setItemsSelected: () => {},
  selectedItemQuantity: [],
  setSelectedItemQuantity: () => {},
  // selectedItemsCount: 0,
  // setSelectedItemsCount: () => {},
});

function App() {
  const [selectedItemQuantity, setSelectedItemQuantity] = useState<
    Array<number>
  >([]);
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);
  const [itemsSelected, setItemsSelected] = useState<productType[]>([]);
  return (
    <>
      <Router>
        <ProductContext.Provider
          value={{
            itemsSelected,
            setItemsSelected,
            selectedItemQuantity,
            setSelectedItemQuantity,
          }}
        >
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/mall" element={<MallMain />} />
            <Route path="/mall/store/clothes" element={<ClothStore />} />
            <Route path="/mall/store/shoes" element={<ShoeStore />} />
            <Route path="/mall/store/cosmetics" element={<CosmeticStore />} />
            <Route path="/mall/store/appliances" element={<ApplianceStore />} />
            <Route path="/mall/store/furniture" element={<FurnitureStore />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/mall/store/decorations"
              element={<DecorationsStore />}
            />
          </Routes>
        </ProductContext.Provider>
      </Router>
    </>
  );
}

export default App;
