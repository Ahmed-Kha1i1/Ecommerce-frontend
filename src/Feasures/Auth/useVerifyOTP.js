import { useMutation } from "@tanstack/react-query";
import { verifyOTP } from "../../Core/Services/ApiUsers";

function useVerifyOTP() {
  const {
    isPending: isLoading,
    error,
    mutate: verify,
  } = useMutation({
    mutationFn: verifyOTP,
  });

  return { isLoading, error, verify };
}

export default useVerifyOTP;
