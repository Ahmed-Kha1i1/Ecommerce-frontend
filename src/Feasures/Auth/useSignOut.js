import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as ApisignOut } from "../../Core/Services/ApiAuth";
import useSession from "./useSession";
import { useNavigate } from "react-router-dom";

function useSignOut() {
  const { handleClearSession } = useSession();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  function onSuccess() {
    handleClearSession();
    queryClient.clear();
    navigate("/");
  }
  const { isPending: isLoading,error, mutate: signOut } = useMutation({
    mutationFn: ApisignOut,
    onSuccess: onSuccess,
  });

  return { isLoading,error, signOut };
}

export default useSignOut;
