/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { filterKeys } from "../../../Core/Hooks/useFilterParams";
import { getRateCss } from "../../../Core/utils/helpers";

function ProductSummary({ product }) {
  return (
    <>
      <div className="flex-center-h gap-1">
        <p className="text-sm text-gray-500">Brand: </p>
        <Link
          to={`/products?${filterKeys.CATEGORY}=${product.category.id}&${filterKeys.BRAND_ID}=${product.brand.id}`}
          className="text-indigo-600 hover:underline"
        >
          {product.brand.name}
        </Link>
      </div>
      <div className="mt-2 flex items-start justify-between gap-5">
        <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 lg:text-3xl">
          {product.name}
        </h2>
      </div>
      <div>
        <span className="flex-center-h flex-wrap gap-2">
          <span className="text-lg">{product.stars} </span>
          <i
            className={`a-icon a-icon-star a-star-${getRateCss(product.stars)}`}
          ></i>
          <span className="ml-5 text-sky-700">{product.reviews} reviews</span>
        </span>
      </div>
    </>
  );
}

export default ProductSummary;
