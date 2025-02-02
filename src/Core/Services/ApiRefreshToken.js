import { BASE_URL } from "../../Constants";
import { clearSession, setSession } from "../GlobalStates/authSlice";
import store from "../../Core/GlobalStates/store";

let refreshTokenPromise = null;

async function refreshTokenFetch() {
  try {
    const refreshResponse = await fetch(`${BASE_URL}/api/auth/RefreshToken`, {
      method: "POST",
      credentials: "include", // Include cookies for refresh token
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!refreshResponse.ok) {
      throw new Error("Failed to refresh token");
    }

    const responseData = await refreshResponse.json();

    const { accessToken, customerId } = responseData.data;

    store.dispatch(setSession({ customerId, accessToken }));

    return accessToken;
  } catch (error) {
    store.dispatch(clearSession());

    throw error;
  }
}

export async function refreshToken() {
  if (!refreshTokenPromise) {
    refreshTokenPromise = refreshTokenFetch()
      .then((newToken) => {
        refreshTokenPromise = null; // Clear after success
        return newToken;
      })
      .catch((error) => {
        refreshTokenPromise = null; // Clear on error
        throw error;
      });
  }

  return refreshTokenPromise;
}
