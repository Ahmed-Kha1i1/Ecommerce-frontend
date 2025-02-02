import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomer } from "../../../Core/Services/ApiCustomers";
import { toastTypes } from "../../../Constants";
import useToast from "../../../Core/ui/Toast/useToast";
import useSession from "../../Auth/useSession";
import { customersKeys, customerDetailTypes } from "../customersKeys";
function useUpdateCustomer() {
  const { showToast } = useToast();
  const { session } = useSession();
  const queryClient = useQueryClient();
  const customerId = session?.customerId;

  function onSuccess() {
    queryClient.invalidateQueries({
      queryKey: customersKeys.detail(customerDetailTypes.ID, customerId),
    });
    showToast("User data updated successfully", toastTypes.Success);
  }
  const {
    isPending: isLoading,
    error,
    mutate: updateCustomerData,
  } = useMutation({
    mutationFn: updateCustomer,
    onSuccess: onSuccess,
    onError: () => {
      showToast("Failed to update user data", toastTypes.Error);
    },
  });

  return { isLoading, error, updateCustomerData };
}

export default useUpdateCustomer;
