/* eslint-disable no-undef */
import { useMutation } from "@tanstack/react-query";
import { changeEmail as ApiChangeEmail } from "../../../Core/Services/ApiCustomers";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
function useChangeEmail() {
  const { showToast } = useToast();
  const { isPending: isLoading,error, mutate: changeEmail } = useMutation({
    mutationFn: ApiChangeEmail,
    onSuccess: () =>
      showToast(
        "Please check your email to proceed with changing your email address.",
        toastTypes.Info,
      ),
    onError: () =>
      showToast("Failed to send confirmation link", toastTypes.Error),
  });

  return { isLoading,error, changeEmail };
}

export default useChangeEmail;
