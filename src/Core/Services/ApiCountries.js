import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getCountries() {
  const result = await fetchData(`${BASE_URL}/api/Countries/All`);

  return result.data;
}
