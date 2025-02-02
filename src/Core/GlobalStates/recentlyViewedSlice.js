import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtils";

const recentlyViewedStorageKey = "recentlyViewed";

function loadRecentlyViewed() {
  const recentlyViewed = loadFromLocalStorage(recentlyViewedStorageKey);
  return recentlyViewed || [];
}

const initialState = loadRecentlyViewed();

function saveRecentlyViewedToLocalStorage(state) {
  saveToLocalStorage(recentlyViewedStorageKey, state);
}

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: initialState,
  reducers: {
    addRecentlyViewed(state, action) {
      const id = action.payload;
      if (!id) return state;

      let newState = [id, ...state.filter((item) => item !== id)];

      if (newState.length > 20) {
        newState = newState.slice(0, 20);
      }

      // Save to localStorage immediately
      saveRecentlyViewedToLocalStorage(newState);
      return newState;
    },
    clearRecentlyViewed(state) {
      state.length = 0;
      saveRecentlyViewedToLocalStorage(state);
      return state;
    },
  },
});

export const { addRecentlyViewed, clearRecentlyViewed } =
  recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
