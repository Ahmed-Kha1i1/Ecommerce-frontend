import { useQuery } from "@tanstack/react-query";
import { getMainCategories } from "../../Core/Services/ApiCategories";
import { categoriesKeys } from "./categoriesKeys";

export default function useMainCategories() {
  const {
    isLoading,
    error,
    data: mainCategories,
  } = useQuery({
    queryKey: categoriesKeys.mainCategories(),
    queryFn: () => getMainCategories(),
  });

  return { isLoading, error, mainCategories };
}
