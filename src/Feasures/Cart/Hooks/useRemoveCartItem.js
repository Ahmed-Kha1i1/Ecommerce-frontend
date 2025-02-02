import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeShoppingCartItem } from "../../../Core/Services/ApiShoppingCartItems";
import { cartDetailTypes, cartsKeys } from "./cartsKeys";
import { useRef } from "react";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import useSession from "../../Auth/useSession";

export default function useRemoveCartItem() {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { session } = useSession();
  const ref = useRef();

  function onSuccess(data) {
    const customerCartQueryKey = cartsKeys.detail(
      cartDetailTypes.CUSTOMER_ID,
      session?.customerId,
    );

    queryClient.setQueriesData(
      { queryKey: customerCartQueryKey },
      (currentCart) => ({
        ...currentCart,
        items: currentCart.items.filter(
          (item) => item.productItemDetails.id !== ref.current.productItemId,
        ),
      }),
    );
    showToast(data.message, toastTypes.Warning);
  }

  const { isPending: isLoading,error, mutate: removeCartItem } = useMutation({
    mutationFn: ({ productItemId }) => {
      ref.current = { productItemId };
      return removeShoppingCartItem({ productItemId });
    },
    onSuccess: onSuccess,
    onError: (data) => showToast(data.message, toastTypes.Error),
  });

  return { isLoading,error, removeCartItem };
}
