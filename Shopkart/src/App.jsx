import {  Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Trending from "./pages/Trending";
import { Footer } from "./components/Footer";
import Cart from "./pages/Cart";


function App() {
  return (
      <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;