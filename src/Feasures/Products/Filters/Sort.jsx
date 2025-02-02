import { IoIosArrowDown } from "react-icons/io";
import useToggleMenu from "../../../Core/Hooks/useToggleMenu";
import useOutsideClick from "../../../Core/Hooks/useOutsideClick";
import useFilterParams, {
  filterKeys,
} from "../../../Core/Hooks/useFilterParams";
const SortBy = [
  { text: "Rate: High to Low", orderBy: "stars", direction: "desc" },
  { text: "Rate: Low to High", orderBy: "stars", direction: "asc" },
  { text: "Price: Low to High", orderBy: "price", direction: "asc" },
  { text: "Price: High to Low", orderBy: "price", direction: "desc" },
];

function Sort() {
  const [searchParams, setSearchParams] = useFilterParams();
  const defaultOrderby = searchParams.get(filterKeys.ORDER_BY);
  const defaultDirection = searchParams.get(filterKeys.ORDER_DIRECTION);
  const selectedSort =
    SortBy.find(
      (sort) =>
        sort.orderBy === defaultOrderby && sort.direction === defaultDirection,
    ) || SortBy[0];

  const { isHidden, toggle, OnClickItem, selectedItem, hide } =
    useToggleMenu(selectedSort);
  const ref = useOutsideClick(hide);

  function onSort(sortItem) {
    searchParams.set(filterKeys.ORDER_BY, sortItem.orderBy);
    searchParams.set(filterKeys.ORDER_DIRECTION, sortItem.direction);
    setSearchParams();
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="group inline-flex justify-center text-base font-medium text-gray-700 hover:text-gray-900"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={toggle}
        >
          Sort by: {selectedItem.text}
          <IoIosArrowDown className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none ${isHidden ? "hidden" : ""}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        ref={ref}
      >
        <div className="py-1" role="none">
          {SortBy.map((sortItem) => (
            <li key={sortItem.text}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-base hover:bg-light-gray"
                onClick={() => {
                  OnClickItem(sortItem);
                  onSort(sortItem);
                }}
              >
                {sortItem.text}
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sort;
