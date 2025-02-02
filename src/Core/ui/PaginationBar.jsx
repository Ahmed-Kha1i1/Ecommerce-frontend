/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { usePagination } from "../Hooks/usePagination";
import { useSearchParams } from "react-router-dom";
import { filterKeys } from "../Hooks/useFilterParams";

function PaginationBar({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(filterKeys.PAGE)) || 1;

  const paginationRange = usePagination({
    totalPageCount: totalPages,
    currentPage,
  });

  if (!currentPage || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  function handlePageChange(page) {
    searchParams.set(filterKeys.PAGE, page);
    setSearchParams(searchParams);
  }
  function prevPage() {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  }

  const baseStyle =
    "w-12 cursor-pointer flex h-10 items-center justify-center border-gray-300 bg-white leading-tight text-black hover:bg-gray-100 hover:text-gray-700 border ";
  const activeStyle = " !border-blue-700 !bg-blue-100 text-blue-700 font-bold"; // Styles for the active page

  return (
    <nav aria-label="Page navigation example">
      <ul className="mx-auto flex h-10 select-none justify-center gap-3 -space-x-px">
        <li>
          <button
            onClick={prevPage}
            className={`text-2xl ${baseStyle}`}
            disabled={currentPage <= 1}
          >
            <RiArrowLeftSLine />
          </button>
        </li>
        {paginationRange?.map((value, index) => (
          <li key={index} className="block">
            {!Number.isInteger(value) ? (
              <span className="text-dark-gray pl-3 text-2xl">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(value)}
                className={`${baseStyle} ${
                  currentPage === value ? activeStyle : ""
                }`}
              >
                {value}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className={`text-2xl ${baseStyle}`}
            disabled={currentPage == lastPage}
          >
            <RiArrowRightSLine />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationBar;
