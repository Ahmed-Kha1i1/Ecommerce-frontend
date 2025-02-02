// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtils";

const sessionStorageKey = "session";

function loadSession() {
  const session = loadFromLocalStorage(sessionStorageKey);
  if (!session || !session.accessToken || !session.customerId) {
    return {
      customerId: null,
      isAuthenticated: false,
      loading: true,
    };
  }

  return session;
}

const initialState = loadSession();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      saveToLocalStorage(sessionStorageKey, state);
    },
    setSession: (state, action) => {
      const { customerId } = action.payload;
      state.customerId = customerId;
      state.isAuthenticated = true;
      state.loading = false;

      saveToLocalStorage(sessionStorageKey, state);
    },
    clearSession: (state) => {
      state.customerId = null;
      state.isAuthenticated = false;
      removeFromLocalStorage(sessionStorageKey);
    },
  },
});

export const { setLoading, setSession, clearSession } = authSlice.actions;

export default authSlice.reducer;
