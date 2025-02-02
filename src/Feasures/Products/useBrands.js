import { getBrands } from "../../Core/Services/ApiBrands";
import { useQuery } from "@tanstack/react-query";
import { BrandsKeys } from "./BrandsKeys";

export default function useBrands(filters) {
  const {
    isLoading,
    error,
    data: brands,
  } = useQuery({
    queryKey: BrandsKeys.list(filters),
    queryFn: ({ signal }) => getBrands(filters, signal),
  });

  return { isLoading, error, brands };
}
