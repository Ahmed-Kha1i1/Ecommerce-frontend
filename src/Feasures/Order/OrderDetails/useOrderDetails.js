import { useQuery } from "@tanstack/react-query";
import { ordersKeys, orderDetailTypes } from "../ordersKeys";
import { getOrderDetails } from "../../../Core/Services/ApiOrders";
function useOrderDetails(orderId) {
  const {
    isLoading,
    error,
    data: order,
  } = useQuery({
    queryKey: ordersKeys.detail(orderDetailTypes.ID, orderId),
    queryFn: () => getOrderDetails({ orderId }),
    enabled: !!orderId, // Only run if customerId is provided
  });

  return { isLoading, error, order };
}

export default useOrderDetails;
