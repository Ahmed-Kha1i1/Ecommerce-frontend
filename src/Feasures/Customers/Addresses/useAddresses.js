import { useQuery } from "@tanstack/react-query";
import { getAddresses } from "../../../Core/Services/ApiAddress";
import { addressesKeys } from "./addressesKeys";
function useAddresses() {
  const {
    isLoading,
    error,
    data: addresses,
  } = useQuery({
    queryKey: addressesKeys.list(),
    queryFn: () => getAddresses(),
  });

  return { isLoading, error, addresses };
}

export default useAddresses;
