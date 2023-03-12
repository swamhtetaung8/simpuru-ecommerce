import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  products: [],
  cartQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = [...payload];
    },
    addToCart: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id == payload.id) {
          product.added = true;
        }
        return product;
      });
      state.cart = [...state.cart, payload];
      state.cartQuantity++;
      state.totalPrice = state.cart.reduce((pv, cv) => pv + cv.price, 0);
    },
    removeCartItem: (state, { payload }) => {
      const deletedItem = state.cart.find((item) => item.id == payload.id);
      state.cart = state.cart.filter((item) => item.id != payload.id);
      state.cartQuantity -= deletedItem.quantity;
      state.totalPrice = state.cart.reduce((pv, cv) => pv + cv.price, 0);
      state.products = state.products.map((product) => {
        if (product.id == payload.id) {
          product.added = false;
        }
        return product;
      });
    },
    increaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id == payload.id) {
          item.quantity++;
          item.price = item.originalPrice * item.quantity;
        }
        return item;
      });
      state.cartQuantity++;

      state.totalPrice = state.cart.reduce((pv, cv) => pv + cv.price, 0);
    },
    decreaseQuantity: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id == payload.id) {
          item.quantity--;
          item.price = item.originalPrice * item.quantity;
        }
        return item;
      });
      state.cartQuantity--;

      state.totalPrice = state.cart.reduce((pv, cv) => pv + cv.price, 0);
    },
    checkOut: (state) => {
      state.cart = [];
      state.products = state.products.map((product) => {
        product.quantity = 1;
        product.added = false;
        product.price = product.originalPrice;
        return product;
      });
      state.cartQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  getProducts,
  addToCart,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
  checkOut,
} = cartSlice.actions;

export default cartSlice.reducer;
