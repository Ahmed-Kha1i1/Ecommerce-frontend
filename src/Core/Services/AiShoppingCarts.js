import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function GetCartDetails() {
  const result = await fetchData(`${BASE_URL}/api/Carts/Info`);

  return result.data;
}
