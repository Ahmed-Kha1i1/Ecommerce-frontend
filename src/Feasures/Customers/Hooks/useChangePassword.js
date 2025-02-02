/* eslint-disable no-undef */
import { useMutation } from "@tanstack/react-query";
import { changePassword as ApichangePassword } from "../../../Core/Services/ApiCustomers";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
function useChangePassword() {
  const { showToast } = useToast();
  const {
    isPending: isLoading,
    error,
    mutate: changePassword,
  } = useMutation({
    mutationFn: ApichangePassword,
    onSuccess: () =>
      showToast("Password changed successfully", toastTypes.Success),
    onError: () => showToast("Failed to change password", toastTypes.Error),
  });

  return { isLoading, error, changePassword };
}

export default useChangePassword;
