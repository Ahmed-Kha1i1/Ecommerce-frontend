import { useQuery } from "@tanstack/react-query";
import { cartsKeys } from "./cartsKeys";
import { GetProductItemsDetails } from "../../../Core/Services/ApiProductItems";
import useGuestCart from "./useGuestCart";
function useGuestItemsDetails() {
  const { cartItems } = useGuestCart();
  const ids = cartItems.map((item) => item.id);

  const {
    isLoading,
    error,
    data: cartDetails,
  } = useQuery({
    queryKey: cartsKeys.GuestCart(),
    queryFn: ({ signal }) => GetProductItemsDetails(ids, signal),
    enabled: ids?.length > 0,
  });

  return { isLoading, error, cartDetails };
}

export default useGuestItemsDetails;
