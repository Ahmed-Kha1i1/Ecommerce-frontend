import { useQuery } from "@tanstack/react-query";
import { getDefaultAddress } from "../../../Core/Services/ApiAddress";
import { addressesKeys } from "./addressesKeys";

function useDefaultAddress() {
  const {
    isLoading,
    error,
    data: defaultAddress,
  } = useQuery({
    queryKey: addressesKeys.default(),
    queryFn: getDefaultAddress,
  });

  return { isLoading, error, defaultAddress };
}

export default useDefaultAddress;
