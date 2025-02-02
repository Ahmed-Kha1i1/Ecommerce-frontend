// hooks/useProductItemsDetails.js

import { useQuery } from "@tanstack/react-query";
import { GetProductItemsDetails } from "../../Core/Services/ApiProductItems";
import { productItemsKeys } from "./productItemsKeys";

export default function useProductItemsDetails(ids) {
  const {
    isLoading,
    error,
    data: productItemsDetails,
  } = useQuery({
    queryKey: productItemsKeys.detail(ids),
    queryFn: ({ signal }) => GetProductItemsDetails(ids, signal),
    enabled: ids?.length > 0, // Only run if there are IDs
  });

  return { isLoading, error, productItemsDetails };
}

