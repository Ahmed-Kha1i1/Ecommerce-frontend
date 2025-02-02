import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function cancelOrderLine({ orderLineId }) {
  const result = await fetchData(
    `${BASE_URL}/api/OrderLines/Cancel/${orderLineId}`,
    {
      method: "DELETE",
    },
  );
  return result.data;
}

const LinesPageSize = 7;
export async function getPagedOrderLines(
  { page = 1, IsCanceled = false } = {},
  signal,
) {
  // Construct the query parameters
  const queryParams = new URLSearchParams();

  queryParams.append("PageNumber", page || 1);
  queryParams.append("PageSize", LinesPageSize);
  queryParams.append("IsCanceled", IsCanceled);

  // Make the API call
  const result = await fetchData(`${BASE_URL}/api/OrderLines?${queryParams}`, {
    signal,
  });

  return result.data;
}
