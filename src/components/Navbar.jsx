import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart, cartQuantity } = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <nav className=" p-5 fixed w-full bg-slate-100 z-50 shadow-md">
      <ul className="flex justify-between">
        <Link to="/">
          <li className=" uppercase font-light text-2xl">Fake Store</li>
        </Link>
        <li>
          <Link to="/cart">
            <div className=" flex gap-2 items-center text-gray-700 cursor-pointer">
              <p>Cart</p>
              <CiShoppingCart size={25} />
              {cartQuantity > 0 && (
                <p className=" bg-red-400 p-2 rounded-full text-white w-5 h-5 flex items-center justify-center text-sm">
                  {cartQuantity}
                </p>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
