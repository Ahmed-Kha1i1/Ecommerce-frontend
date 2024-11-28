import Filters from "../../Feasures/Products/Filters/Filters";
import { IoGrid } from "react-icons/io5";
import Sort from "../../Feasures/Products/Filters/Sort";
import MobileFilters from "../../Feasures/Products/Filters/MobileFilters";
import { useState } from "react";
import { FaThList } from "react-icons/fa";
import ProductsList from "../../Feasures/Products/ProductsList";

function Dashboard() {
  const [view, setView] = useState("V");
  const isVertical = view === "V";
  return (
    <div className="h-full bg-white">
      <main className="flex min-h-full flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div className="flex items-center">
            <Sort />

            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              onClick={() => setView((old) => (old === "H" ? "V" : "H"))}
            >
              <span className="sr-only">View grid</span>
              {isVertical ? (
                <IoGrid className="size-5" />
              ) : (
                <FaThList className="size-5" />
              )}
            </button>

            <MobileFilters />
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          className="flex flex-1 flex-col py-6"
        >
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="flex flex-1 gap-x-8 gap-y-10">
            <div className="hidden lg:block">
              <Filters />
            </div>
            <ProductsList isVertical={isVertical} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
