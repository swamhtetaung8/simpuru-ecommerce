import React from "react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/counterSlice";
import { motion } from "framer-motion";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" p-5 shadow-lg flex flex-col gap-3 md:w-72 w-80 transition-all duration-300 hover:scale-105">
        <img
          src={product.image}
          className="h-[100px] object-contain self-center"
          alt=""
        />
        <h2 className=" w-full truncate text-black/70 text-sm font-medium uppercase">
          {product.title}
        </h2>
        <p className=" font-bold text-black/80 tracking-wide">
          ${product.originalPrice}
        </p>
        <div className="flex justify-between items-center">
          <Link to={`/detail/${product.id}`}>
            <button className=" text-sm text-gray-400 hover:text-gray-500">
              View details
            </button>
          </Link>
          <button
            className={` p-2 rounded-md transition-all duration-100 ${
              product.added
                ? " bg-green-400 "
                : " bg-gray-200 hover:bg-gray-300 "
            }`}
            onClick={() => {
              dispatch(addToCart(product));
            }}
            disabled={product.added}>
            {product.added ? (
              <BsFillCartCheckFill className=" text-white/80" />
            ) : (
              <BsFillCartPlusFill />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
