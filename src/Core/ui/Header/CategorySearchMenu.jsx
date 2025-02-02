/* eslint-disable react/prop-types */
import { useEffect } from "react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import useToggleMenu from "../../Hooks/useToggleMenu";
import useMainCategories from "../../../Feasures/Categories/useMainCategories";
import { filterKeys } from "../../Hooks/useFilterParams";
import { useSearchParams } from "react-router-dom";

function CategorySearchMenu({ onSelect }) {
  const [searchParams] = useSearchParams();
  const { isHidden, toggle, OnClickItem, selectedItem, hide } =
    useToggleMenu(null);
  const { isLoading, mainCategories = [] } = useMainCategories();
  const ref = useOutsideClick(hide);

  useEffect(() => {
    if (mainCategories?.length > 0) {
      const selectedcategoryId = searchParams.get(filterKeys.CATEGORY);

      const selectedCategory = mainCategories.find(
        (category) => category.id == selectedcategoryId,
      );

      handleChooseCategory(selectedCategory || mainCategories[0]);
    }
  }, [mainCategories]);

  function handleChooseCategory(category) {
    onSelect(category);
    OnClickItem(category);
  }
  return (
    <div className="relative text-lg">
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="z-10 inline-flex h-full flex-shrink-0 items-center rounded-s-lg bg-light-gray px-4 py-2.5 text-center text-base font-medium text-dark-dray focus:text-black focus:outline-none"
        type="button"
        onClick={toggle}
        disabled={isLoading}
      >
        {selectedItem?.name || ""}
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
          {!isLoading &&
            mainCategories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-base hover:bg-light-gray"
                  onClick={() => {
                    handleChooseCategory(category);
                  }}
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
