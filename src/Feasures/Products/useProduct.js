import { ProductsKeys, ProductDetailTypes } from "./ProductsKeys";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../Core/Services/ApiProducts";

function useProduct(productId, retry = 3) {
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ProductsKeys.detail(ProductDetailTypes.ID, productId),
    queryFn: ({ signal }) => getProduct(productId, signal),
    enabled: !!productId,
    retry: retry,
  });

  return { isLoading, error, product };
}

export default useProduct;
