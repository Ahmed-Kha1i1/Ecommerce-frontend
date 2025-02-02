import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getAccessTokon({ email, passwordHash }) {
  return (
    await fetchData(`${BASE_URL}/api/Auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, passwordHash }),
    })
  ).data;
}

export async function revokeToken() {
  return (
    await fetchData(`${BASE_URL}/api/Auth/RevokeToken`, {
      method: "POST",
    })
  ).data;
}

export async function setPassword({ email }) {
  return await fetchData(`${BASE_URL}/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}

export async function resetPassword({ email, resetCode, newPassword }) {
  return await fetchData(`${BASE_URL}/resetPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, resetCode, newPassword }),
  });
}

export async function isAuthenticated() {
  return await fetchData(`${BASE_URL}/api/Auth/status`, {
    method: "GET",
  });
}

export async function signIn({ email, password }) {
  return await fetchData(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export async function signOut() {
  return await fetchData(`${BASE_URL}/logout`, {
    method: "POST",
  });
}

export async function register({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  gender,
}) {
  const result = await fetchData(`${BASE_URL}/api/Customers/Add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      gender,
    }),
  });

  return result.data;
}
