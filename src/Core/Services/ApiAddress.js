import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getAddress({ addressId }) {
  const result = await fetchData(`${BASE_URL}/api/Addresses/${addressId}`);

  return result.data;
}

export async function getDefaultAddress() {
  const result = await fetchData(`${BASE_URL}/api/Addresses/DefaultAddress`);

  return result.data;
}

export async function getAddresses() {
  const result = await fetchData(`${BASE_URL}/api/Addresses`);

  return result.data;
}

export async function setDefaultAddress({ addressId }) {
  const result = await fetchData(`${BASE_URL}/api/Addresses/SetDefault`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ addressId }),
  });

  return result.data;
}

export async function deleteAddress({ addressId }) {
  const result = await fetchData(`${BASE_URL}/api/Addresses/${addressId}`, {
    method: "DELETE",
  });

  return result.data;
}

export async function addAddress({
  countryId,
  address1,
  address2,
  postalCode,
  city,
  state,
}) {
  const result = await fetchData(`${BASE_URL}/api/Addresses/Add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countryId,
      address1,
      address2,
      postalCode,
      city,
      state,
    }),
  });

  return result.data;
}

export async function updateAddress({
  countryId,
  addressId,
  address1,
  address2,
  postalCode,
  city,
  state,
}) {
  
  const result = await fetchData(`${BASE_URL}/api/Addresses/Update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countryId,
      addressId,
      address1,
      address2,
      postalCode,
      city,
      state,
    }),
  });

  return result.data;
}
