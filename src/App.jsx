import React from "react";
import { Route, Routes } from "react-router-dom";
import Electronics from "./Pages/Electronics/Electronics";
import MensFashion from "./Pages/MensFashion/MensFashion";
import WomensFashion from "./Pages/WomensFashion/WomensFashion";
import Jewelery from "./Pages/Jewelery/Jewelery";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SinglePage from "./Pages/SinglePage/SinglePage";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/MensFashion" element={<MensFashion />} />
        <Route path="/WomensFashion" element={<WomensFashion />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
