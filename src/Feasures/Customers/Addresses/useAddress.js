import { useQuery } from "@tanstack/react-query";
import { addressesKeys } from "./addressesKeys";
import { getAddress } from "../../../Core/Services/ApiAddress";

function useAddress(addressId) {
  const {
    isLoading,
    error,
    data: address,
  } = useQuery({
    queryKey: addressesKeys.detail(addressesKeys.ID, addressId),
    queryFn: () => getAddress({ addressId }),
    enabled: !!addressId,
  });

  return { isLoading, error, address };
}

export default useAddress;
