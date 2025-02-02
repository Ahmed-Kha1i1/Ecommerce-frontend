/* eslint-disable react/prop-types */
import Filters from "./Filters";
import { RiFilter2Fill } from "react-icons/ri";
import DrawerOverlay from "./DrawerOverlay";

function MobileFilters({ products, category }) {
  return (
    <DrawerOverlay
      position="right"
      title="Filters"
      renderTrigger={(Open) => (
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          onClick={() => Open()}
        >
          <span className="sr-only">Filters</span>
          <RiFilter2Fill className="size-6" />
        </button>
      )}
      renderChildren={(Close) => (
        <div className="h-full">
          <Filters products={products} category={category} onClose={Close} />
        </div>
      )}
    ></DrawerOverlay>
  );
}

export default MobileFilters;
