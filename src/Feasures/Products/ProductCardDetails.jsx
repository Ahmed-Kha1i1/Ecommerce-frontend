/* eslint-disable react/prop-types */
// import Stars from "./Filters/Stars";
import AddToCardButton from "./AddToCardButton";
import OutOfStockButton from "./OutOfStockButton";
import { Link } from "react-router-dom";
import { formatToFixed, getRateCss } from "../../Core/utils/helpers";
import { globalDecimalPlaces } from "../../Constants";

function ProductCardDetails({ product }) {
  const rate = product.rate;
  const priceAfterDiscount = rate ? product.price * (1 - rate / 100) : null;
  return (
    <div className="grid flex-1 grid-rows-[auto_auto_auto_1fr] p-5 pb-5">
      <Link to={`/Products/${product.id}`}>
        <h5
          className="max-h-[3.5rem] overflow-hidden text-ellipsis whitespace-normal text-xl font-normal leading-[1.75rem] tracking-tight text-gray-900"
          style={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {product.title}
        </h5>
      </Link>
      <div className="mb-5 mt-2.5 flex items-center">
        <i
          className={`a-icon a-icon-star-medium a-star-medium-${getRateCss(product.stars)}`}
        ></i>
        <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
          {product.stars}
        </span>
      </div>

      <div className="mb-1">
        <span className="mr-2 text-xl font-bold text-gray-900">
          $
          {formatToFixed(
            priceAfterDiscount ? priceAfterDiscount : product.price,
            globalDecimalPlaces,
          )}
        </span>
        {priceAfterDiscount && (
          <del className="text-xl font-semibold text-gray-400">
            {product.price}
          </del>
        )}
      </div>
      <div className="relative mt-6 flex flex-col justify-end">
        {product?.stockQuantity ? (
          <AddToCardButton to={`/Products/${product.id}`} />
        ) : (
          <OutOfStockButton />
        )}
      </div>
    </div>
  );
}

export default ProductCardDetails;
