/* eslint-disable no-undef */
import { useMutation } from "@tanstack/react-query";
import { signIn as ApiSignIn } from "../../Core/Services/ApiAuth";
import useSession from "./useSession";

function UseSignIn() {
  const { handleSetSession, handleClearSession } = useSession();
  function onSuccess(data) {
    handleSetSession(data.userId);
  }
  function onError() {
    handleClearSession();
  }
  const { isPending: isLoading,error, mutate: signIn } = useMutation({
    mutationFn: ApiSignIn,
    onSuccess: onSuccess,
    onError: onError,
  });

  return { isLoading,error, signIn };
}

export default UseSignIn;
