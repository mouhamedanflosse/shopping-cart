import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductItemList from "./component/ProductItemList";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductItemList />} />  
          <Route path="cart" element={<Cart />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
