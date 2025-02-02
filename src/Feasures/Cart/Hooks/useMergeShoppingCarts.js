import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cartDetailTypes, cartsKeys } from "./cartsKeys";
import { addShoppingCartItems } from "../../../Core/Services/ApiShoppingCartItems";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import useSession from "../../Auth/useSession";
function useMergeShoppingCarts() {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { session } = useSession();

  function onSuccess() {
    queryClient.invalidateQueries({
      queryKey: cartsKeys.detail(
        cartDetailTypes.CUSTOMER_ID,
        session?.customerId,
      ),
    });
  }

  const {
    isPending: isLoading,
    mutate: mergeCarts,
    error,
  } = useMutation({
    mutationFn: ({ productItems }) => {
      return addShoppingCartItems({ productItems });
    },
    onSuccess: onSuccess,
    onError: () =>
      showToast("Failed to merge shopping carts:", toastTypes.Error),
  });

  return { isLoading, error, mergeCarts };
}

export default useMergeShoppingCarts;
