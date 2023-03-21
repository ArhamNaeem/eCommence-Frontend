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
import SignIn from "./components/Mall/login/SignIn";
// import Store from "./components/Mall/store/Store";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/mall" element={<MallMain />} />
          <Route path="/mall/store/clothes" element={<ClothStore />} />
          <Route path="/mall/store/shoes" element={<ShoeStore />} />
          <Route path="/mall/store/cosmetics" element={<CosmeticStore />} />
          <Route path="/mall/store/appliances" element={<ApplianceStore />} />
          <Route path="/mall/store/furniture" element={<FurnitureStore />} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route
            path="/mall/store/decorations"
            element={<DecorationsStore />}
          />
          <Route path="/mall/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
