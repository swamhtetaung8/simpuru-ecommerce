import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import { StateProvider } from "./context/StateProvider";

import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
const App = () => {
  return (
    <main className=" overflow-hidden">
      <StateProvider>
        <AnimatePresence>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </AnimatePresence>
      </StateProvider>
    </main>
  );
};

export default App;
