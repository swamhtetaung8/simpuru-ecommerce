import React, { useEffect, useState } from "react";
import { useCustom } from "../context/StateProvider";
import Product from "./Product";
import { ImSpinner } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { filterProducts, getProducts } from "../features/counterSlice";
const Products = () => {
  const {
    loading,
    userCategory,
    setUserCategory,
    allTab,
    setAllTab,
    menTab,
    setMenTab,
    womenTab,
    setWomenTab,
    electronicTab,
    setElectronicTab,
    jewelriesTab,
    setjewelriesTab,
  } = useCustom();
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const filterCategory = (categoryname) => {
    setUserCategory(categoryname);
  };

  const changeTab = (tabname) => {
    switch (tabname) {
      case "all":
        setAllTab(true);
        setMenTab(false);
        setWomenTab(false);
        setElectronicTab(false);
        setjewelriesTab(false);
        break;
      case "men":
        setAllTab(false);
        setMenTab(true);
        setWomenTab(false);
        setElectronicTab(false);
        setjewelriesTab(false);
        break;
      case "women":
        setAllTab(false);
        setMenTab(false);
        setWomenTab(true);
        setElectronicTab(false);
        setjewelriesTab(false);
        break;
      case "electronics":
        setAllTab(false);
        setMenTab(false);
        setWomenTab(false);
        setElectronicTab(true);
        setjewelriesTab(false);
        break;
      case "jewelries":
        setAllTab(false);
        setMenTab(false);
        setWomenTab(false);
        setElectronicTab(false);
        setjewelriesTab(true);
        break;
      default:
        return false;
    }
  };

  // console.log(products);
  if (loading) {
    return (
      <div className=" w-full h-screen flex items-center justify-center">
        <ImSpinner className=" animate-spin" size={40} color="gray" />
      </div>
    );
  }
  return (
    <div
      name="products"
      className=" container mx-auto px-5 lg:px-0 min-h-screen">
      <h1 className=" text-4xl font-medium tracking-wide pt-20 pb-10">
        Our Products
      </h1>
      <div className="my-4 hidden md:block">
        <ul className="flex flex-wrap -mb-px text-lg md:gap-5 gap-0 font-medium text-center justify-center">
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                allTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("all");
                filterCategory("");
              }}>
              All
            </button>
          </li>
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                menTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("men");
                filterCategory("men's clothing");
              }}>
              Men
            </button>
          </li>
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                womenTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("women");
                filterCategory("women's clothing");
              }}>
              Women
            </button>
          </li>
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                electronicTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("electronics");
                filterCategory("electronics");
              }}>
              Electronics
            </button>
          </li>
          <li>
            <button
              className={` p-4 border-b-2 ${
                jewelriesTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("jewelries");
                filterCategory("jewelery");
              }}>
              Jewelries
            </button>
          </li>
        </ul>
      </div>
      <div className="my-4 md:hidden">
        <button
          className={` p-4 border-b-2 ${
            allTab ? "" : "border-transparent "
          } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
          onClick={() => {
            changeTab("all");
            filterCategory("");
          }}>
          All
        </button>

        <ul className="grid grid-cols-2">
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                menTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("men");
                filterCategory("men's clothing");
              }}>
              Men
            </button>
          </li>
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                womenTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("women");
                filterCategory("women's clothing");
              }}>
              Women
            </button>
          </li>
          <li className="mr-2">
            <button
              className={` p-4 border-b-2 ${
                electronicTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("electronics");
                filterCategory("electronics");
              }}>
              Electronics
            </button>
          </li>
          <li>
            <button
              className={` p-4 border-b-2 ${
                jewelriesTab ? "" : "border-transparent "
              } rounded-t-lg  hover:text-gray-600 hover:border-gray-300`}
              onClick={() => {
                changeTab("jewelries");
                filterCategory("jewelery");
              }}>
              Jewelries
            </button>
          </li>
        </ul>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        className="  grid grid-cols-1 justify-items-center md:grid-cols-2 gap-20 lg:grid-cols-4 py-10 2xl:grid-cols-5">
        {products.map((product) => {
          if (userCategory == "") {
            return <Product key={product.id} product={product} />;
          } else if (product.category == userCategory) {
            return <Product key={product.id} product={product} />;
          }
        })}
      </motion.div>
    </div>
  );
};

export default Products;
