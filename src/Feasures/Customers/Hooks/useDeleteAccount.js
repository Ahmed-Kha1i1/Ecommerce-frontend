import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../../Core/Services/ApiUsers";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";
import useSession from "../../Auth/useSession";
import { useNavigate } from "react-router-dom";

function useDeleteAccount() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { handleClearSession } = useSession();
  const queryClient = useQueryClient();

  function onSuccess() {
    handleClearSession();
    queryClient.clear();
    navigate("/");
    showToast("User account deleted successfully", toastTypes.Success);
  }
  const { isPending: isLoading, error,mutate: deleteAccount } = useMutation({
    mutationFn: deleteUser,
    onSuccess: onSuccess,
    onError: () => showToast("Failed to delete user account", toastTypes.Error),
  });

  return { isLoading,error, deleteAccount };
}

export default useDeleteAccount;
