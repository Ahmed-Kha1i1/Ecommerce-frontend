import CategorySearchMenu from "./CategorySearchMenu";

function CategorySearch() {
  return (
    <form className="col-span-2 row-start-2 mt-4 grid h-12 w-full grid-cols-[auto_1fr] lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:pl-3.5">
      <CategorySearchMenu />
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="placeholder:text-dark-dray z-20 block h-full w-full rounded-e-lg border border-s-2 bg-white p-2.5 text-sm focus:outline-none"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button
          type="submit"
          className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}

export default CategorySearch;
