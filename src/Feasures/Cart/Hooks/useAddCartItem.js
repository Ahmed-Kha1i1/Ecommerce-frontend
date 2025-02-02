import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShoppingCartItem } from "../../../Core/Services/ApiShoppingCartItems";
import { cartDetailTypes, cartsKeys } from "./cartsKeys";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import useSession from "../../Auth/useSession";

export default function useAddCartItem() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  const { showToast } = useToast();

  function onSuccess(data) {
    queryClient.invalidateQueries({
      queryKey: cartsKeys.detail(
        cartDetailTypes.CUSTOMER_ID,
        session?.customerId,
      ),
    });
    showToast(data.message, toastTypes.Success);
  }

  const { isPending: isLoading,error, mutate: addCartItem } = useMutation({
    mutationFn: ({ productItemId, quantity }) => {
      return addShoppingCartItem({ productItemId, quantity });
    },
    onSuccess: onSuccess,
    onError: (data) => showToast(data.message, toastTypes.Error),
  });

  return { isLoading,error, addCartItem };
}
