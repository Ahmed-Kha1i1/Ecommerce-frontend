/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
function ProductsListV({ products = [] }) {
  return (
    <div className="mb-4 grid flex-1 gap-4 sm:grid-cols-3 sm:justify-between md:mb-8 xl:grid-cols-4 2xl:grid-cols-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductsListV;
