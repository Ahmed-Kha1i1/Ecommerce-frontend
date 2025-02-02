import { useMutation } from "@tanstack/react-query";
import { getAccessTokon } from "../../Core/Services/ApiAuth";
import useSession from "./useSession";

function useLogin() {
  const { handleSetSession } = useSession();
  function onSuccess(data) {
    handleSetSession(data.customerId, data.accessToken);
  }
  const { isPending: isLoading,error, mutate: Login } = useMutation({
    mutationFn: getAccessTokon,
    onSuccess: onSuccess,
  });

  return { isLoading,error, Login };
}

export default useLogin;
