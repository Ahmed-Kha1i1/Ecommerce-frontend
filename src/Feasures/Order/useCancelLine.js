import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrderLine } from "../../Core/Services/ApiOrderLines";
import { toastTypes } from "../../Constants";
import { ordersKeys } from "./ordersKeys";
import { ProductsKeys } from "../Products/ProductsKeys";
import useToast from "../../Core/ui/Toast/useToast";

function useCancelLine() {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  function onSuccess() {
    queryClient.invalidateQueries({
      queryKey: ProductsKeys.details(),
    });
    queryClient.invalidateQueries({
      queryKey: ordersKeys.details(),
    });

    queryClient.invalidateQueries({
      queryKey: ordersKeys.linesLists(),
    });
    showToast("Order line canceled successfully!", toastTypes.Success);
  }

  const { isPending: isLoading, error,mutate: cancelLine } = useMutation({
    mutationFn: cancelOrderLine,
    onSuccess: onSuccess,
    onError: () => showToast("Failed to cancel order line", toastTypes.Error),
  });

  return { isLoading,error, cancelLine };
}

export default useCancelLine;
