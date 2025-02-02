/* eslint-disable react/prop-types */
import Filters from "./Filters/Filters";
import Spinner from "../../Core/ui/Spinner";
import ProductsList from "./ProductsList";
import { useState } from "react";
import ProductsToolbar from "./ProductsToolbar";

function ProductsExplorer({ products, isLoadingProducts }) {
  const [view, setView] = useState("V");
  const isVertical = view === "V";
  return (
    <div className="h-full rounded-md bg-white">
      <main className="flex min-h-full flex-col px-4 sm:px-6 lg:px-8">
        <ProductsToolbar
          isVertical={isVertical}
          products={products}
          setView={setView}
        />

        <section
          aria-labelledby="products-heading"
          className="flex flex-1 flex-col py-6"
        >
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="flex flex-1 gap-x-8 gap-y-10">
            <div className="hidden lg:block">
              <Filters products={products} />
            </div>
            {isLoadingProducts ? (
              <Spinner />
            ) : (
              <ProductsList isVertical={isVertical} products={products} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductsExplorer;
