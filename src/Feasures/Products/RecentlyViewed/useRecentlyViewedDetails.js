import { useSelector } from "react-redux";
import { GetProductsDetails } from "../../../Core/Services/ApiProducts";
import { useQuery } from "@tanstack/react-query";

function useRecentlyViewedDetails() {
  const recentlyViewedIds = useSelector((state) => state.recentlyViewed);

  const {
    isLoading,
    error,
    data: productsDetails,
  } = useQuery({
    queryKey: ["recentlyViewed"],
    queryFn: ({ signal }) => GetProductsDetails(recentlyViewedIds, signal),
    enabled: recentlyViewedIds?.length > 0, // Only run if there are IDs
  });

  let orderedProductsDetails = [];
  if (!isLoading && productsDetails?.length > 0) {
    orderedProductsDetails = recentlyViewedIds
      .map((id) => productsDetails.find((product) => product.id == id))
      .filter(Boolean);
  }

  return { isLoading, error, orderedProductsDetails };
}

export default useRecentlyViewedDetails;
