import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getBrands(
  {
    searchQuery = null,
    categoryId = null,
    condition = null,
    stars = null,
    minPrice = null,
    maxPrice = null,
  } = {},
  signal,
) {
  // Construct the query parameters
  const queryParams = new URLSearchParams();

  if (searchQuery) queryParams.append("SearchQuery", searchQuery);
  if (categoryId) queryParams.append("CategoryId", categoryId);
  if (condition !== null) queryParams.append("Condition", condition);
  if (stars !== null) queryParams.append("Stars", stars);
  if (maxPrice !== null) queryParams.append("MaxPrice", maxPrice);
  if (minPrice !== null) queryParams.append("MinPrice", minPrice);

  // Make the API call
  const result = await fetchData(`${BASE_URL}/api/Brands?${queryParams}`, {
    signal,
  });

  return result.data;
}
