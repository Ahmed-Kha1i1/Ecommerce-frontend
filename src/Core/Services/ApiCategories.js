import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getMainCategories() {
  const result = await fetchData(`${BASE_URL}/api/Categories/Main`);

  return result.data;
}

export async function getCategory(CategoryId, signal) {
  const result = await fetchData(`${BASE_URL}/api/Categories/${CategoryId}`, {
    signal,
  });

  return result.data;
}
