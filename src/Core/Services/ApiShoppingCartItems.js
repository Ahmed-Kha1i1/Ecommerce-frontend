import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function addShoppingCartItem({ productItemId, quantity }, signal) {
  const result = await fetchData(`${BASE_URL}/api/CartItems/AddItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productItemId, quantity }),
    signal,
  });

  return result;
}

export async function removeShoppingCartItem({ productItemId }, signal) {
  const result = await fetchData(`${BASE_URL}/api/CartItems`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productItemId }),
    signal,
  });

  return result;
}

export async function updateShoppingCartItemQuantity(
  { productItemId, newQuantity },
  signal,
) {
  const result = await fetchData(`${BASE_URL}/api/CartItems/UpdateQuantity`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productItemId, newQuantity }),
    signal,
  });

  return result;
}

export async function addShoppingCartItems({ productItems }, signal) {
  const result = await fetchData(`${BASE_URL}/api/CartItems/AddMultipleItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productItems }),
    signal,
  });

  return result.data;
}
