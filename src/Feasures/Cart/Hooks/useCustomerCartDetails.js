import { useQuery } from "@tanstack/react-query";
import { cartDetailTypes, cartsKeys } from "./cartsKeys";
import { GetCartDetails } from "../../../Core/Services/AiShoppingCarts";
import useSession from "../../Auth/useSession";

export default function useCustomerCartDetails() {
  const { session } = useSession();
  const customerId = session.customerId;

  const {
    isLoading,
    error,
    data: cartDetails,
  } = useQuery({
    queryKey: cartsKeys.detail(cartDetailTypes.CUSTOMER_ID, customerId),
    queryFn: GetCartDetails,
    enabled: !!customerId, // Only run if customerId is provided
  });

  return { isLoading, error, cartDetails };
}
