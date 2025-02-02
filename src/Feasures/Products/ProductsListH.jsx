/* eslint-disable react/prop-types */
import ProductCardH from "./ProductCardH";
function ProductsListH({ products = [] }) {
  return (
    <div className="jus mb-4 grid flex-1 grid-cols-1 justify-between gap-4 md:mb-8 2xl:grid-cols-2">
      {products.map((product) => (
        <ProductCardH key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsListH;
