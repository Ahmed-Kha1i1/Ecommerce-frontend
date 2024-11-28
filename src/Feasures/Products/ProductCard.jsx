import DiscountBadge from "./DiscountBadge";
import ProductCardDetails from "./ProductCardDetails";

function ProductCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100">
      <a href="#">
        <DiscountBadge percentage={15} />
        <img
          className="rounded-t-lg p-8"
          src="apple-watch.png"
          alt="product image"
        />
      </a>
      <ProductCardDetails />
    </div>
  );
}

export default ProductCard;
