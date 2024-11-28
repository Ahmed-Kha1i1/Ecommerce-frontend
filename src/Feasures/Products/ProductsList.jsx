import ProductsListV from "./ProductsListV";
import ProductsListH from "./ProductsListH";
import PaginationBar from "./PaginationBar";
/* eslint-disable react/prop-types */
function ProductsList({ isVertical = true }) {
  return (
    <div>
      {isVertical ? <ProductsListV /> : <ProductsListH />}
      <PaginationBar />
    </div>
  );
}

export default ProductsList;
