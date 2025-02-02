/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductCard from "../../../Feasures/Products/ProductCard";

function RecentlyViewedSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="animate-pulse">
          <div className="mb-4 h-48 rounded-lg bg-gray-200"></div>
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}

function RecentlyViewedSection({ recentlyViewed, isLoading }) {
  if (!isLoading && recentlyViewed.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Pick Up Where You Left Off
            </h2>
            <p className="mt-2 text-gray-600">Your recently viewed items</p>
          </div>
          <Link
            to="/watchlist"
            className="rounded-lg px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800"
          >
            View All →
          </Link>
        </div>
        {isLoading ? (
          <RecentlyViewedSkeleton />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[...recentlyViewed].slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentlyViewedSection;
