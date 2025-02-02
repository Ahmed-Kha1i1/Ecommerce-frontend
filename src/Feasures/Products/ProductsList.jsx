import ProductsListV from "./ProductsListV";
import ProductsListH from "./ProductsListH";
import PaginationBar from "../../Core/ui/PaginationBar";
import { maxPages } from "../../Constants";
/* eslint-disable react/prop-types */

function ProductsList({ isVertical = true, products }) {
  const totalPages =
    products.totalPages <= maxPages ? products.totalPages : maxPages;
  return (
    <div className="flex flex-1 flex-col">
      {isVertical ? (
        <ProductsListV products={products?.data} />
      ) : (
        <ProductsListH products={products?.data} />
      )}

      <PaginationBar totalPages={totalPages} />
    </div>
  );
}

export default ProductsList;
