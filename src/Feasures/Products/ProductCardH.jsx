/* eslint-disable react/prop-types */
import DiscountBadge from "./DiscountBadge";
import ProductCardDetails from "./ProductCardDetails";

function ProductCardH({ product }) {
  return (
    <div className="relative flex max-h-[248px] w-full items-center rounded-lg border border-gray-200 bg-white shadow hover:shadow-selected-card">
      <a href={`/Products/${product.id}`} className="block w-52 p-2">
        {product?.rate && (
          <DiscountBadge percentage={product?.rate} position="left" />
        )}
        <img
          className="h-auto max-h-[228px] max-w-48 rounded-t-lg object-cover md:h-auto md:rounded-none md:rounded-s-lg"
          src={product.imageURL}
          alt={product.Title}
        />
      </a>
      <ProductCardDetails product={product} />
    </div>
  );
}

export default ProductCardH;
