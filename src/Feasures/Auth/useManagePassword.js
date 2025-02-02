/* eslint-disable no-undef */
import { useMutation } from "@tanstack/react-query";
import { setPassword } from "../../Core/Services/ApiAuth";
import useToast from "../../Core/ui/Toast/useToast";
import { toastTypes } from "../../Constants";

function useManagePassword() {
  const { showToast } = useToast();

  function onSuccess() {
    showToast(
      "A reset code has been sent to your email. Please check your inbox.",
      toastTypes.Info,
    );
  }

  const {
    isPending: isLoading,
    error,
    mutate: sendCode,
  } = useMutation({
    mutationFn: setPassword,
    onSuccess: onSuccess,
    onError: (error) => {
      showToast(error.message, toastTypes.Error);
    },
  });

  return { isLoading, error, sendCode };
}

export default useManagePassword;
