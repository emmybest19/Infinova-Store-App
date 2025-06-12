
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
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import { useState } from "react";
// import sales from "./components/FlashSales/sales";
import Flash from "./components/FlashSales/Flash";


function App() {
  const [posts, setPosts] = useState("")

  const mainPosts = Flash.filter((post) => 
    post.describe.toLocaleLowerCase().includes(posts.toLocaleLowerCase())
  )
  return (
    <div className="dark:bg-black">
      <CartProvider>
        <BrowserRouter>
        
        <Header posts={posts} setPosts={setPosts} />
          <Routes>
            <Route index element={<Home mainPosts={mainPosts} />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SuperDeals" element={<SuperDeals />} />
            <Route path="/FlashSales" element={<FlashSales mainPosts={mainPosts} />} />
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
