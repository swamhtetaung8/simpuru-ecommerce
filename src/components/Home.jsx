import React from "react";
import Products from "./Products";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import landingPhoto from "../assets/landing.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <section
        className="h-screen w-full flex items-stretch flex-col lg:flex-row"
        name="home">
        <motion.div
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          initial={{ opacity: 0, x: "-100vw" }}
          exit={{ x: "-100vw" }}
          className=" flex-1 self-center lg:pl-20 flex flex-col gap-8 px-5 justify-center lg:px-0">
          <h1 className=" md:text-4xl font-medium tracking-wide text-2xl">
            Everything You Need
          </h1>
          <h1 className=" md:text-4xl font-medium tracking-wide md:ml-48 text-2xl ml-0">
            In One Place
          </h1>
          <div className="flex items-center">
            <Link to="products" smooth duration={600} offset={-20}>
              <button className="border border-black rounded-full px-8 py-3 text-xl ml-0 transition-all duration-300 hover:text-white hover:bg-black md:ml-80 inline-block">
                Explore
              </button>
            </Link>
            <img
              src="/logo.jpg"
              className="inline-block"
              width={"70px"}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          initial={{ opacity: 0, x: "100vw" }}
          exit={{ x: "100vw" }}
          className=" flex-1">
          <img src={landingPhoto} className="h-full object-cover" alt="" />
        </motion.div>
      </section>
      <Products />
    </div>
  );
};

export default Home;
