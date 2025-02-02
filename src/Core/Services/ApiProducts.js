import { BASE_URL, maxPages } from "../../Constants";
import fetchData from "./Fetch";

export async function getProducts(
  {
    searchQuery = null,
    brandId = null,
    categoryId = null,
    condition = null,
    stars = null,
    minPrice = null,
    maxPrice = null,
    orderBy = null,
    orderDirection = null,
    pageNumber = null,
    pageSize = null,
  } = {},
  signal,
) {
  // Construct the query parameters
  const queryParams = new URLSearchParams();

  if (searchQuery) queryParams.append("SearchQuery", searchQuery);
  if (brandId) queryParams.append("BrandId", brandId);
  if (categoryId) queryParams.append("CategoryId", categoryId);
  if (condition) queryParams.append("Condition", condition);
  if (stars) queryParams.append("Stars", stars);
  if (maxPrice) queryParams.append("MaxPrice", maxPrice);
  if (minPrice || minPrice == 0) queryParams.append("MinPrice", minPrice);
  queryParams.append("OrderBy", orderBy || "stars");
  queryParams.append("OrderDirection", orderDirection || "desc");
  queryParams.append("PageNumber", pageNumber || 1);
  queryParams.append("PageSize", pageSize || maxPages);

  // Make the API call
  const result = await fetchData(`${BASE_URL}/api/Products?${queryParams}`, {
    signal,
  });

  return result.data;
}

export async function getProduct(ProductId, signal) {
  const result = await fetchData(`${BASE_URL}/api/Products/${ProductId}`, {
    signal,
  });

  if (result.data && Array.isArray(result.data.productItems)) {
    result.data.productItems.forEach((item) => {
      if (item.variations && typeof item.variations === "object") {
        item.variations = new Map(Object.entries(item.variations));
      }
    });
  }

  return result.data;
}

export async function GetProductsDetails(ids, signal) {
  const result = await fetchData(`${BASE_URL}/api/Products/GetDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
    signal,
  });

  return result.data;
}
