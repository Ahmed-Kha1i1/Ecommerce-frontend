/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DiscountBadge from "./DiscountBadge";
import ProductCardDetails from "./ProductCardDetails";

function ProductCard({ product }) {
  return (
    <div className="relative mx-auto flex max-h-[488px] w-full max-w-72 flex-col overflow-hidden rounded-md border border-gray-200 shadow hover:shadow-selected-card">
      <Link
        to={`/Products/${product.id}`}
        className="mx-auto block h-60 w-full bg-white p-2"
      >
        {product?.rate && <DiscountBadge percentage={product?.rate} />}
        <img
          className="mx-auto max-h-52 max-w-52 rounded-t-lg"
          src={product.imageURL}
          alt={product.Title}
        />
      </Link>
      <ProductCardDetails product={product} />
    </div>
  );
}

export default ProductCard;
