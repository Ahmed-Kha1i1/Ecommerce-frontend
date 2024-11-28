import DiscountBadge from "./DiscountBadge";
import ProductCardDetails from "./ProductCardDetails";

function ProductCardH() {
  return (
    <div
      href="#"
      className="relative flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:flex-row"
    >
      <a href="#" className="block min-w-52">
        <DiscountBadge percentage={15} position="left" />
        <img
          className="h-auto w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="apple-watch.png"
          alt="product image"
        />
      </a>
      <ProductCardDetails />
    </div>
  );
}

export default ProductCardH;
