import { ProductsKeys } from "./ProductsKeys";
import { getProducts } from "../../Core/Services/ApiProducts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export default function useProducts(filters) {
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ProductsKeys.list(filters),
    queryFn: ({ signal }) => getProducts(filters, signal),
  });

  const totalPages = products?.totalPages;
  const currentPage = products?.currentPage;

  if (totalPages) {
    if (currentPage < totalPages && currentPage < 50) {
      queryClient.prefetchQuery({
        queryKey: ProductsKeys.list({
          ...filters,
          pageNumber: (currentPage + 1).toString(),
        }),
        queryFn: ({ signal }) =>
          getProducts({ ...filters, pageNumber: currentPage + 1 }, signal),
      });
    }

    if (currentPage > 1) {
      queryClient.prefetchQuery({
        queryKey: ProductsKeys.list({
          ...filters,
          pageNumber: (currentPage - 1).toString(),
        }),
        queryFn: ({ signal }) =>
          getProducts({ ...filters, pageNumber: currentPage - 1 }, signal),
      });
    }
  }
  return { isLoading, error, products };
}
