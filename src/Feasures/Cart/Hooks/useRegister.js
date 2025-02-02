import { useMutation } from "@tanstack/react-query";
import { register as ApiRegister } from "../../../Core/Services/ApiAuth";
import { useNavigate } from "react-router-dom";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";

function useRegister() {
  const naviagte = useNavigate();
  const { showToast } = useToast();
  function onSuccess() {
    naviagte("/auth/login");
  }

  function onError() {
    showToast("Error at Register", toastTypes.Error);
  }
  const {
    isPending: isLoading,
    error,
    mutate: register,
  } = useMutation({
    mutationFn: ApiRegister,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading, error, register };
}

export default useRegister;
