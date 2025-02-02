import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function addOrder({ paymentMethod }) {
  const result = await fetchData(`${BASE_URL}/api/Orders/Add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paymentMethod }),
  });
  
  return result.data;
}

export async function getOrderDetails({ orderId }) {
  const result = await fetchData(`${BASE_URL}/api/Orders/${orderId}`);
  return result.data;
}

export async function cancelOrder({ orderId }) {
  const result = await fetchData(`${BASE_URL}/api/Orders/Cancel/${orderId}`, {
    method: "DELETE",
  });
  return result.data;
}
