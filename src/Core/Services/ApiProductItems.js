import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function GetProductItemsDetails(ids, signal) {
  const result = await fetchData(`${BASE_URL}/api/ProductItems/GetDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productItemIds: ids }),
    signal,
  });

  return result.data;
}
