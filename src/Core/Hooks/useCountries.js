import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../Services/ApiCountries";

function useCountries() {
  const {
    isLoading,
    error,
    data: countries,
  } = useQuery({
    queryKey: ["Countries", "list"],
    queryFn: () => getCountries(),
  });

  return { isLoading, error, countries };
}

export default useCountries;
