import { IoIosArrowDown } from "react-icons/io";
import useToggleMenu from "../../../Core/Hooks/useToggleMenu";
import useOutsideClick from "../../../Core/Hooks/useOutsideClick";
const SortBy = [
  "Most Popular",
  "Best Rating",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

function Sort() {
  const { isHidden, toggle, OnClickItem, selectedItem, hide } = useToggleMenu(
    SortBy[0],
  );
  const ref = useOutsideClick(hide);
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
          Sort by: {selectedItem}
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
          {SortBy.map((value) => (
            <li key={value}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-base hover:bg-light-gray"
                onClick={() => OnClickItem(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sort;
