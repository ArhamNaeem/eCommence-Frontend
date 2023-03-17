import Header from "./components/Home/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoreMain from "./components/Store/StoreMain";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/store" element={<StoreMain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
