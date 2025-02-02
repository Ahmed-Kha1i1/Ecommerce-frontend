/* eslint-disable react/prop-types */
import { IoGrid } from "react-icons/io5";
import Sort from "./Filters/Sort";
import { FaThList } from "react-icons/fa";
import MobileFilters from "./Filters/MobileFilters";
import CategoryHeader from "./CategoryHeader";
import useCurrentCategory from "./useCurrentCategory";
import ErrorFallback from "../../Core/ui/ErrorFallback";
import ToolbarSkeleton from "../../Core/ui/ToolbarSkeleton";

function ProductsToolbar({ products, isVertical, setView }) {
  const { category, error, isLoading } = useCurrentCategory();

  if (isLoading) return <ToolbarSkeleton />;

  if (error)
    return <ErrorFallback error={{ message: "Failed to load category" }} />;

  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 py-3">
      <div>
        {category ? (
          <CategoryHeader
            category={category}
            productsCount={products?.totalCount}
          />
        ) : (
          <div className="flex items-center gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">
              All Products
            </h3>
            {products?.totalCount ? (
              <div className="text-gray-500">
                ({products.totalCount} products found)
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <Sort />

        <button
          type="button"
          className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
          onClick={() => setView((old) => (old === "H" ? "V" : "H"))}
        >
          <span className="sr-only">View grid</span>
          {isVertical ? (
            <IoGrid className="size-5" />
          ) : (
            <FaThList className="size-5" />
          )}
        </button>

        <MobileFilters products={products} category={category} />
      </div>
    </div>
  );
}

export default ProductsToolbar;
