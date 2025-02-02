import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateShoppingCartItemQuantity } from "../../../Core/Services/ApiShoppingCartItems";

import { cartDetailTypes, cartsKeys } from "./cartsKeys";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import useSession from "../../Auth/useSession";
import { useRef } from "react";

export default function useAddCartItem() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  const { showToast } = useToast();
  const ref = useRef();

  function onSuccess(data) {
    const customerCartQueryKey = cartsKeys.detail(
      cartDetailTypes.CUSTOMER_ID,
      session?.customerId,
    );

    queryClient.setQueriesData(
      { queryKey: customerCartQueryKey },
      updateCartItems,
    );
    showToast(data.message, toastTypes.Success);
  }

  function updateCartItems(currentCart) {
    const updatedItems = currentCart.items.map(modifyItemQuantity);

    return {
      ...currentCart,
      items: updatedItems,
    };
  }

  function modifyItemQuantity(cartItem) {
    if (cartItem.productItemDetails.id !== ref.current.productItemId) {
      return cartItem;
    }

    return {
      ...cartItem,
      quantity: ref.current.newQuantity,
    };
  }

  const {
    isPending: isLoading,
    error,
    mutate: updateCartItem,
  } = useMutation({
    mutationFn: ({ productItemId, newQuantity }) => {
      ref.current = { productItemId, newQuantity };

      return updateShoppingCartItemQuantity({
        productItemId,
        newQuantity,
      });
    },
    onSuccess: onSuccess,
    onError: (data) => showToast(data.message, toastTypes.Error),
  });

  return { isLoading, error, updateCartItem };
}
