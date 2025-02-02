import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword as ApiResetPassword } from "../../Core/Services/ApiAuth";
import { useNavigate } from "react-router-dom";
import useToast from "../../Core/ui/Toast/useToast";
import { toastTypes } from "../../Constants";
import { customerDetailTypes, customersKeys } from "../Customers/customersKeys";
import useSession from "./useSession";

function useResetPassword() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const { session } = useSession();
  const customerId = session?.customerId;

  function onSuccess() {
    navigate("/auth/login");
    queryClient.invalidateQueries({
      queryKey: customersKeys.detail(customerDetailTypes.ID, customerId),
    });
  }

  function onError() {
    showToast("Failed to reset password", toastTypes.Error);
  }
  const {
    isPending: isLoading,
    error,
    mutate: resetPassword,
  } = useMutation({
    mutationFn: ApiResetPassword,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, resetPassword };
}

export default useResetPassword;
