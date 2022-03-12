import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { useState } from "react";
import Products from "./components/products/Products";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
