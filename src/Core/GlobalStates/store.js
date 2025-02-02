import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import toastReducer from "./toastSlice";
import authReducer from "./authSlice";
import recentlyViewedReducer from "./recentlyViewedSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    toast: toastReducer,
    auth: authReducer,
    recentlyViewed: recentlyViewedReducer,
  },
});

export default store;
