import { useMutation } from "@tanstack/react-query";
import { confirmEmail } from "../../Core/Services/ApiUsers";
import { EmailConditions, toastTypes } from "../../Constants";
import useToast from "../../Core/ui/Toast/useToast";

function useConfirmEmail() {
  const { showToast } = useToast();
  function onSuccess(result) {
    const {
      message,
      data: { condition },
    } = result;
    switch (condition) {
      case EmailConditions.Used:
        showToast(message, toastTypes.Error);
        break;
      case EmailConditions.Verified:
      case EmailConditions.HasOtp:
        showToast(message, toastTypes.Info);
        break;
      case EmailConditions.ReceiveOtp:
        showToast(message, toastTypes.Success);
        break;
      default:
        showToast("Something went wrong.", toastTypes.Error);
        break;
    }
  }

  const { isPending: isLoading, mutate: confirm, error } = useMutation({
    mutationFn: confirmEmail,
    onSuccess: onSuccess,
    onError: (error) => {
      showToast(error.message, toastTypes.Error);
    },
  });

  return { isLoading, confirm, error };
}

export default useConfirmEmail;
