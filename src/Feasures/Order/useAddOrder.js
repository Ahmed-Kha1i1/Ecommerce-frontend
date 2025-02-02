import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrder } from "../../Core/Services/ApiOrders";
import useToast from "../../Core/ui/Toast/useToast";
import { toastTypes } from "../../Constants";
import { ProductsKeys } from "../Products/ProductsKeys";
import { cartsKeys } from "../Cart/Hooks/cartsKeys";
import { useNavigate } from "react-router-dom";
import { ordersKeys } from "./ordersKeys";

function useAddOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useToast();

  function onSuccess(data) {
    queryClient.invalidateQueries({
      queryKey: ProductsKeys.details(),
    });
    queryClient.invalidateQueries({
      queryKey: cartsKeys.details(),
    });
    queryClient.invalidateQueries({
      queryKey: ordersKeys.linesLists(),
    });
    navigate(`/Account/Orders/detail/${data}`);
    showToast("Order placed successfully!", toastTypes.Success);
  }

  const { isPending: isLoading,error, mutate: order } = useMutation({
    mutationFn: addOrder,
    onSuccess: onSuccess,
    onError: () => showToast("Failed to place order", toastTypes.Error),
  });

  return { isLoading,error, order };
}

export default useAddOrder;
