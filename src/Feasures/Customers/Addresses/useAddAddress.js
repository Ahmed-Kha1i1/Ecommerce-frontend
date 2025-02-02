import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastTypes } from "../../../Constants";
import { addressesKeys } from "./addressesKeys";
import useToast from "../../../Core/ui/Toast/useToast";
import { addAddress as ApiAddAddress } from "../../../Core/Services/ApiAddress";
function useAddAddress() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  function onSuccess() {
    showToast("Address Added successfully", toastTypes.Success);
    queryClient.invalidateQueries({
      queryKey: addressesKeys.lists(),
    });

    queryClient.invalidateQueries({
      queryKey: addressesKeys.default(),
    });
  }
  function onError() {
    showToast("Fail to Add the address", toastTypes.Error);
  }

  const {
    isPending: isLoading,
    error,
    mutate: addAddress,
  } = useMutation({
    mutationFn: ApiAddAddress,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, addAddress };
}

export default useAddAddress;
