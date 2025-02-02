import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtils";

const cartStorageKey = "cart";
function loadCart() {
  const cart = loadFromLocalStorage(cartStorageKey);
  if (!cart || !cart.items) {
    return { items: [] };
  }
  return cart;
}
const initialState = loadCart();

function saveCartToLocalStorage(state) {
  saveToLocalStorage(cartStorageKey, state);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart(state) {
      state.items = [];
      removeFromLocalStorage(cartStorageKey);
    },
    addItem(state, action) {
      const { id, quantity } = action.payload;

      state.items.push({ id, quantity, AddedDate: Date.now() });
      saveCartToLocalStorage(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveCartToLocalStorage(state);
    },
    increaseItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) existingItem.quantity += 1;
      saveCartToLocalStorage(state);
    },
    decreaseItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) existingItem.quantity -= 1;
      saveCartToLocalStorage(state);
    },
    addAmountToItem(state, action) {
      const { id, amount } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) existingItem.quantity += amount;
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  clearCart,
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  addAmountToItem,
} = cartSlice.actions;
export default cartSlice.reducer;
