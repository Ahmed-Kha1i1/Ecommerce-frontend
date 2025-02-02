/* eslint-disable react/prop-types */
import useCategory from "../../Categories/useCategory";
import { filterKeys } from "../../../Core/Hooks/useFilterParams";
import { Link } from "react-router-dom";
function CategoryBreadcrumbs({ categoryId }) {
  const { isLoading, category } = useCategory(categoryId);
  if (isLoading) return null;

  if (!category) return null;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        {category.parentHierarchy.map((parent) => (
          <div key={parent.id} className="flex items-center space-x-2">
            <Link
              to={`/products?${filterKeys.CATEGORY}=${parent.id}`}
              className="hover:text-gray-600 hover:underline"
            >
              {parent.name}
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        ))}
        <span>{category.name}</span>
      </div>
    </div>
  );
}

export default CategoryBreadcrumbs;
