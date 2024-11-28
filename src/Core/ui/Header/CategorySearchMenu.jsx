import useMainCategories from "../../../Feasures/Categories/useMainCategories";
import useOutsideClick from "../../Hooks/useOutsideClick";
import useToggleMenu from "../../Hooks/useToggleMenu";

function CategorySearchMenu() {
  const { isHidden, toggle, OnClickItem, selectedItem, hide } =
    useToggleMenu(null);
  const { isLoading, mainCategories } = useMainCategories();
  const ref = useOutsideClick(hide);

  return (
    <div className="relative text-lg">
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="z-10 inline-flex h-full flex-shrink-0 items-center rounded-s-lg bg-light-gray px-4 py-2.5 text-center text-base font-medium text-dark-dray focus:text-black focus:outline-none"
        type="button"
        onClick={toggle}
      >
        {selectedItem?.name || "All Categories"}
        <svg
          className="ms-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        ref={ref}
        className={`absolute left-1 top-[calc(100%+2px)] z-10 max-h-80 min-w-max divide-y divide-gray-100 overflow-y-scroll border bg-white shadow ${isHidden ? "hidden" : ""}`}
      >
        <ul className="py-2 text-sm" aria-labelledby="dropdown-button">
          <li key="">
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 text-base hover:bg-light-gray"
              onClick={() => OnClickItem(null)}
            >
              All Categories
            </button>
          </li>
          {!isLoading &&
            mainCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-base hover:bg-light-gray"
                  onClick={() => OnClickItem(category)}
                >
                  {category.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CategorySearchMenu;
