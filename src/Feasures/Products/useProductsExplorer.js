import { useSearchParams } from "react-router-dom";
import useProducts from "./UseProducts";
import { filterKeys } from "../../Core/Hooks/useFilterParams";
import { conditions } from "../../Constants";

function useProductsExplorer() {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get(filterKeys.CATEGORY);
  const { isLoading, error, products } = useProducts({
    categoryId: categoryId,
    searchQuery: searchParams.get(filterKeys.SEARCH_QUERY),
    pageNumber: searchParams.get(filterKeys.PAGE),
    orderBy: searchParams.get(filterKeys.ORDER_BY),
    orderDirection: searchParams.get(filterKeys.ORDER_DIRECTION),
    brandId: searchParams.get(filterKeys.BRAND_ID),
    condition:
      searchParams.get(filterKeys.CONDITION) == conditions.at(0).text
        ? conditions.at(0).value
        : conditions.at(1).value,
    minPrice: searchParams.get(filterKeys.MIN_PRICE),
    maxPrice: searchParams.get(filterKeys.MAX_PRICE),
    stars: searchParams.get(filterKeys.RATE),
  });

  return {
    products,
    isLoading,
    error,
  };
}

export default useProductsExplorer;
