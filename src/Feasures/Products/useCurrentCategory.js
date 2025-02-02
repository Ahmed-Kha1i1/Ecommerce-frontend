import { useSearchParams } from "react-router-dom";
import { filterKeys } from "../../Core/Hooks/useFilterParams";
import useCategory from "../Categories/useCategory";

function useCurrentCategory() {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get(filterKeys.CATEGORY);
  const { isLoading, error, category } = useCategory(categoryId, 1);

  return { category, isLoading, error };
}

export default useCurrentCategory;
