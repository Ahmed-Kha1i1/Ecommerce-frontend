import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress as ApiDeleteAddress } from "../../../Core/Services/ApiAddress";
import { addressesKeys } from "./addressesKeys";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
function useDeleteAddress() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  function onSuccess() {
    showToast("Address deleted successfully", toastTypes.Success);
    queryClient.invalidateQueries({
      queryKey: addressesKeys.lists(),
    });
  }
  function onError() {
    showToast("Fail to delete the address", toastTypes.Error);
  }
  const {
    isPending: isLoading,
    error,
    mutate: deleteAddress,
  } = useMutation({
    mutationFn: ApiDeleteAddress,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, deleteAddress };
}

export default useDeleteAddress;
