import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../features/counterSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    // <div className=" flex justify-between">
    //   <div className=" flex gap-10">
    //     <img src={cartItem.image} className="w-[120px]" alt="" />
    //     <div className="space-y-3">
    //       <h2 className=" text-sm">{cartItem.title}</h2>
    //       <p>${cartItem.price}</p>
    //       <button className=" bg-red-400 text-white hover:bg-red-500 px-2 py-1 rounded-md text-sm">
    //         Remove
    //       </button>
    //     </div>
    //   </div>
    //   <div>
    //     <button>+</button>
    //     <p>{cartItem.quantity}</p>
    //     <button>-</button>
    //   </div>
    // </div>
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex flex-col md:flex-row w-full  gap-5 sm:space-x-4">
        <img
          className=" object-contain w-[100px] "
          src={cartItem.image}
          alt="product image"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug ">
                {cartItem.title}
              </h3>
              <p className="text-sm text-gray-400">{cartItem.category}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                ${cartItem.price.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              className="flex items-center text-red-400 px-2 py-1 pl-0 space-x-1"
              onClick={() => dispatch(removeCartItem(cartItem))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current">
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            <div className=" flex items-center pl-3 gap-3">
              <button
                className="  px-2 py-1 text-red-500 border border-red-500 cursor-pointer rounded-l active:bg-red-600  hover:bg-red-500 transition-all duration-100 hover:text-white"
                onClick={() => {
                  if (cartItem.quantity > 1) {
                    dispatch(decreaseQuantity(cartItem));
                  }
                }}>
                -
              </button>
              <p className=" w-3 text-end">{cartItem.quantity}</p>
              <button
                className="  px-2 py-1 text-green-500 border border-green-500 cursor-pointer rounded-r active:bg-green-500  hover:bg-green-400 hover:text-white transition-all duration-100"
                onClick={() => dispatch(increaseQuantity(cartItem))}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
