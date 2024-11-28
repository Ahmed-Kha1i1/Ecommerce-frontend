import Filters from "./Filters";
import { RiFilter2Fill } from "react-icons/ri";
import DrawerOverlay from "./DrawerOverlay";

function MobileFilters() {
  return (
    <DrawerOverlay
      position="right"
      renderTrigger={(setIsClosed) => (
        <button
          type="button"
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          onClick={() => setIsClosed(false)}
        >
          <span className="sr-only">Filters</span>
          <RiFilter2Fill className="size-6" />
        </button>
      )}
    >
      <div className="h-full">
        <Filters />
      </div>
    </DrawerOverlay>
  );
}

export default MobileFilters;
