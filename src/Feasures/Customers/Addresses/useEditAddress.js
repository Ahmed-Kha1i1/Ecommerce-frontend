import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastTypes } from "../../../Constants";
import useToast from "../../../Core/ui/Toast/useToast";
import { addressesKeys } from "./addressesKeys";
import { updateAddress as ApiUpdateAddress } from "../../../Core/Services/ApiAddress";

function useEditAddress() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  function onSuccess() {
    showToast("Address updated successfully", toastTypes.Success);
    queryClient.invalidateQueries({
      queryKey: addressesKeys.lists(),
    });
  }
  function onError() {
    showToast("Fail to updated the address", toastTypes.Error);
  }
  const {
    isPending: isLoading,
    error,
    mutate: updateAddress,
  } = useMutation({
    mutationFn: ApiUpdateAddress,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, updateAddress };
}

export default useEditAddress;
