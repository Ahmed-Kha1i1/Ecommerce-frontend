import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function confirmEmail({ email }) {
  const result = await fetchData(`${BASE_URL}/api/Users/send-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return result;
}

export async function verifyOTP({ email, otp }) {
  const result = await fetchData(`${BASE_URL}/api/Users/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });

  return result.data;
}

export async function checkVerification({ email }) {
  const result = await fetchData(`${BASE_URL}/api/Users/check-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return result.data;
}

export async function deleteUser({ password }) {
  const result = await fetchData(`${BASE_URL}/api/Users`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  return result.data;
}
