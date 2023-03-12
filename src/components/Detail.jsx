import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCustom } from "../context/StateProvider";
import { GiWorld } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/counterSlice";
import { motion } from "framer-motion";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
const Detail = () => {
  const { products } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentProduct = products.find((product) => product.id == id);
  console.log(currentProduct);
  return (
    <>
      <ScrollToTopOnMount />
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100vw" }}
        exit={{ x: "100vw" }}
        transition={{ duration: 0.5 }}
        className=" w-screen flex flex-col md:flex-row gap-10 lg:gap-40 px-10 py-20 pt-24">
        <div className=" md:w-[30%] lg:w-[25%] w-full">
          <img
            src={currentProduct.image}
            width={"100%"}
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className=" flex-1">
          <div className=" flex justify-between items-center">
            <p>{currentProduct.title}</p>
            <p className=" bg-gray-500 px-4 py-1 text-white rounded-full">
              ${currentProduct.originalPrice}
            </p>
          </div>
          <p className=" my-2 flex items-center gap-3">
            <span>{currentProduct.rating.rate}</span>
            <span>
              {[...Array(5)].map((x, index) => (
                <AiFillStar
                  key={index}
                  size={20}
                  className={`inline-block ${
                    Math.round(Number(currentProduct.rating.rate)) > index
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </span>
            <span className=" text-gray-400 text-sm">
              {currentProduct.rating.count} left
            </span>
          </p>
          <div className="flex md:gap-10 gap-5">
            <button
              className={`py-2 my-2  px-3 rounded-sm  text-white w-full flex items-center justify-center gap-1 md:gap-3 transition-all duration-200 ${
                currentProduct.added
                  ? " bg-green-400"
                  : "bg-gray-400  hover:bg-gray-500 "
              }`}
              disabled={currentProduct.added}
              onClick={() => {
                dispatch(addToCart(currentProduct));
              }}>
              {currentProduct.added ? (
                <>Added</>
              ) : (
                <>
                  Add to Cart{" "}
                  <BsFillCartPlusFill className="inline-block" size={25} />
                </>
              )}
            </button>
            <Link
              to="/"
              className={`py-3  px-3 rounded-sm my-2 text-black border border-black/40 w-full text-center hover:bg-black/80 hover:text-white transition-all duration-300`}>
              <button>Back to Home</button>
            </Link>
          </div>
          <p className=" my-5">
            <span className=" tracking-wide ">Description</span>
            <span className=" whitespace-wrap text-sm lg:text-base text-gray-500 mt-5 tracking-wide block">
              {currentProduct.description}
            </span>
          </p>
          <hr />
          <p className=" my-10 tracking-wider">
            Category -{" "}
            <span className=" text-gray-500">{currentProduct.category}</span>
          </p>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="rounded-md border bg-slate-100 w-full text-center p-10 flex flex-col items-center gap-3">
              <GiWorld size={30} color="gray" />
              <p className=" font-medium">International delivery</p>
              <p className=" font-light text-gray-500">
                Get your order in 2 days
              </p>
            </div>
            <div className="rounded-md border bg-slate-100 w-full text-center p-10 flex flex-col items-center gap-3">
              <RiMoneyDollarCircleLine size={30} color="gray" />
              <p className=" font-medium">Loyalty rewards</p>
              <p className=" font-light text-gray-500">
                Participate in our membership
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Detail;
