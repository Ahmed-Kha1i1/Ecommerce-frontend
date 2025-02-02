/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import FilterHeader from "./FilterHeader";
import useCurrentCategory from "../useCurrentCategory";
import ErrorFallback from "../../../Core/ui/ErrorFallback";
import DefaultSkeleton from "../../../Core/ui/DefaultSkeleton";
function FilterCategories() {
  const { category, isLoading, error } = useCurrentCategory();
  if (isLoading) return <DefaultSkeleton />;

  if (error)
    return <ErrorFallback error={{ message: "Failed to load categories" }} />;

  if (!category) return null;
  return (
    <div>
      <FilterHeader>Categories</FilterHeader>

      {category?.parentHierarchy.length ? (
        <ul
          role="list"
          className="mb-2 space-y-2 text-sm font-medium text-gray-900"
        >
          {category?.parentHierarchy
            .slice()
            .reverse()
            .map((parent) => (
              <li
                key={parent.id}
                className="flex flex-row items-center text-gray-700"
              >
                <RiArrowLeftSLine />
                <Link to={`/Products?category=${parent.id}`}>
                  {parent.name}
                </Link>
              </li>
            ))}
        </ul>
      ) : null}

      <p className="pl-4">{category.name}</p>

      {category?.children.length ? (
        <ul
          role="list"
          className="mt-2 space-y-2 pl-7 text-sm font-medium text-gray-900"
        >
          {category?.children.map((child) => (
            <li key={child.id} className="text-gray-700">
              <Link to={`/Products?category=${child.id}`}>{child.name}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default FilterCategories;
