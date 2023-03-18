import Header from "./components/Home/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MallMain from "./components/Mall/MallMain";
import Store from "./components/Mall/store/Store";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/mall" element={ <MallMain/> } />
          <Route path="/mall/store" element={<Store />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
