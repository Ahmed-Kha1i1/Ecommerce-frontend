import { useQuery } from "@tanstack/react-query";
import { getCustomer } from "../../../Core/Services/ApiCustomers";
import useSession from "../../Auth/useSession";
import { customerDetailTypes, customersKeys } from "../customersKeys";
function useCurrentCustomer() {
  const { session } = useSession();
  const customerId = session.customerId;

  const {
    isLoading,
    error,
    data: customer,
  } = useQuery({
    queryKey: customersKeys.detail(customerDetailTypes.ID, customerId),
    queryFn: getCustomer,
    enabled: !!customerId,
  });

  return { isLoading, error, customer };
}

export default useCurrentCustomer;
