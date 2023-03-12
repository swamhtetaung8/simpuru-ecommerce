import React, { useEffect, useState } from "react";
import { useCustom } from "../context/StateProvider";
import Product from "./Product";
import { ImSpinner } from "react-icons/im";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Products = () => {
  const { loading } = useCustom();
  const { products } = useSelector((state) => state.cart);
  // console.log(products);
  if (loading) {
    return (
      <div className=" w-full h-screen flex items-center justify-center">
        <ImSpinner className=" animate-spin" size={40} color="gray" />
      </div>
    );
  }
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      exit={{ y: "100vh" }}
      transition={{ duration: 0.5 }}
      className=" p-10 flex flex-wrap gap-5 pt-24 justify-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </motion.div>
  );
};

export default Products;
