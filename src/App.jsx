import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { StateProvider } from "./context/StateProvider";

import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <StateProvider>
      <AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </StateProvider>
  );
};

export default App;
