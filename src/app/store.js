import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
