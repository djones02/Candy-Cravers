import React from "react";
import Navbar from "./navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home.js";
import About from "./navbar/About.js";
import Candy from "./candy/Candy.js";
import NewCandyForm from "./home/NewCandyForm.js";
import SuccessfulPost from "./home/SuccessfulPost.js";
import Cart from "./home/Cart.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/candy/:occasion" element={<Candy />} />
        <Route path="/candy/new" element={<NewCandyForm />} />
        <Route path="/candy/new/successful" element={<SuccessfulPost />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
