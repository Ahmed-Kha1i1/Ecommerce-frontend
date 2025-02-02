import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder as ApiCancelOrder } from "../../Core/Services/ApiOrders";
import { toastTypes } from "../../Constants";
import { ordersKeys } from "./ordersKeys";
import { ProductsKeys } from "../Products/ProductsKeys";
import useToast from "../../Core/ui/Toast/useToast";

function useCancelOrder() {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  function onSuccess() {
    queryClient.invalidateQueries({
      queryKey: ProductsKeys.details(),
    });
    queryClient.invalidateQueries({
      queryKey: ordersKeys.details(),
    });

    showToast("Order canceled successfully!", toastTypes.Success);
  }

  const { isPending: isLoading,error, mutate: cancelOrder } = useMutation({
    mutationFn: ApiCancelOrder,
    onSuccess: onSuccess,
    onError: () => showToast("Failed to cancel order", toastTypes.Error),
  });

  return { isLoading,error,cancelOrder };
}

export default useCancelOrder;
