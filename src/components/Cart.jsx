import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { checkOut, getProducts } from "../features/counterSlice";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import { motion } from "framer-motion";
const Cart = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.cart);
  let today = new Date();
  return (
    <>
      <ScrollToTopOnMount />
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.5 }}
        className=" lg:w-[50%] md:w-[70%] w-[90%] mx-auto min-h-screen">
        {cart.length > 0 ? (
          <>
            {/* <div className=" pt-24 pb-10 flex flex-col gap-10 border-b">
            {cart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.key} />
            ))}
          </div>
          <div className=" flex justify-between items-center py-5">
            <p className=" text-2xl text-gray-600 font-light">Total:</p>
            <p className=" text-xl font-light text-gray-700">
              ${totalPrice.toFixed(2)}
            </p>
          </div> */}
            <div className=" pt-32 pb-20">
              <div className="flex flex-col max-w-3xl  p-6 space-y-4 sm:p-10 border rounded-lg">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                  {cart.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.key} />
                  ))}
                </ul>
                <div className="space-y-1 text-right">
                  <p>
                    Total amount:
                    <span className="font-semibold">
                      $ {totalPrice.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Not including taxes and shipping costs
                  </p>
                </div>
                <div className="flex justify-end space-x-4">
                  <Link to="/">
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md border-black hover:bg-black hover:text-white transition-all duration-200">
                      <span className="">Back</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="px-6 py-2  rounded-md bg-green-400 text-white  hover:bg-green-500"
                    onClick={() => {
                      openModal();
                    }}>
                    <span className="">Checkout</span>
                  </button>
                </div>
              </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => {
                  closeModal();
                  dispatch(checkOut());
                  navigate("/");
                }}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95">
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900">
                          Thank you for your purchase
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Your payment has been successfully submitted. We’ve
                            sent you an email with all of the details of your
                            order.
                          </p>
                        </div>
                        <div className=" p-3 md:p-5">
                          <div className="flex justify-between items-center text-gray-500 py-3">
                            <h1 className=" text-xl uppercase font-medium">
                              Fake store
                            </h1>
                            <p>
                              {today.getDate()}.
                              {today.getMonth() >= 10
                                ? today.getMonth()
                                : "0" + today.getMonth()}
                              .{today.getFullYear()}
                            </p>
                          </div>
                          <div className=" uppercase flex justify-between items-center text-gray-400 py-3">
                            <p>Description</p>
                            <p>Subtotal</p>
                          </div>
                          <div className=" border-t border-b border-dotted py-3 text-gray-500 ">
                            <div className=" space-y-3">
                              {cart.map((item) => (
                                <div className=" flex justify-between gap-5">
                                  <p>{item.title}</p>
                                  <p>${item.price.toFixed(2)}</p>
                                </div>
                              ))}
                            </div>
                            <p className=" text-end mt-10 font-medium flex justify-between items-center">
                              Total :{" "}
                              <span className=" text-lg font-bold">
                                $ {totalPrice.toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            onClick={() => {
                              closeModal();
                              dispatch(checkOut());
                              navigate("/");
                            }}>
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        ) : (
          <div className=" pt-[50%] text-center flex flex-col gap-8">
            <h1 className=" text-3xl font-light">Your Cart is Empty</h1>
            <Link to="/">
              <button className=" bg-black text-white px-5 py-2 text-xl rounded-md hover:bg-black/80">
                Go back
              </button>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
