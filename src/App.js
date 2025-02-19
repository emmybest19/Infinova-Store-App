
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlashSales from "./pages/FlashSales";
import SuperDeals from "./pages/SuperDeals";
import New from "./pages/New";
import "./App.css";
import Header from "./header/Header";
import DownFooter from "./components/Footer/DownFooter";
import UpperFooter from "./components/Footer/UpperFooter";
import Login from "./components/Login";
import Register from "./components/Register";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="dark:bg-black">
      <CartProvider>
        <BrowserRouter>
        
        <Header/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SuperDeals" element={<SuperDeals />} />
            <Route path="/FlashSales" element={<FlashSales />} />
            <Route path="/New" element={<New />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <UpperFooter />
          <DownFooter />
        </BrowserRouter> 
      </CartProvider>
      
    </div>
  );
}

export default App;
