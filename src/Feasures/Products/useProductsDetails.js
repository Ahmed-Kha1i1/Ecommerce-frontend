import { useQuery } from "@tanstack/react-query";
import { productItemsKeys } from "./productItemsKeys";
import { GetProductsDetails } from "../../Core/Services/ApiProducts";

function useProductsDetails(ids) {
  const {
    isLoading,
    error,
    data: productsDetails,
  } = useQuery({
    queryKey: productItemsKeys.detail(ids),
    queryFn: ({ signal }) => GetProductsDetails(ids, signal),
    enabled: ids?.length > 0, // Only run if there are IDs
  });

  return { isLoading, error, productsDetails };
}

export default useProductsDetails;
