import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setDefaultAddress } from "../../../Core/Services/ApiAddress";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import { addressesKeys } from "./addressesKeys";
function useSetDefaultAddress() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  function onSuccess() {
    showToast("Address seted as default successfully", toastTypes.Success);
    queryClient.invalidateQueries({
      queryKey: addressesKeys.lists(),
    });
  }
  function onError() {
    showToast("Fail to set the address as default", toastTypes.Error);
  }
  const {
    isPending: isLoading,
    error,
    mutate: setAsDefault,
  } = useMutation({
    mutationFn: setDefaultAddress,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, setAsDefault };
}

export default useSetDefaultAddress;
