import { categoriesKeys, categoryDetailTypes } from "./categoriesKeys";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../Core/Services/ApiCategories";

function useCategory(CategoryId, retry = 3) {
  const {
    isLoading,
    error,
    data: category,
  } = useQuery({
    queryKey: categoriesKeys.detail(categoryDetailTypes.ID, CategoryId),
    queryFn: ({ signal }) => getCategory(CategoryId, signal),
    enabled: !!CategoryId,
    retry: retry,
  });

  return { isLoading, error, category };
}

export default useCategory;
