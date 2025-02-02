/* eslint-disable react/prop-types */
import { useState } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";

function Select({ values = [], defaultValue, title, onSelect }) {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  return (
    <div className="relative flex">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="z-10 flex w-full flex-shrink-0 items-center justify-between rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {title}
          {value}
        </span>
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
        id="dropdown-states"
        className={`z-10 ${!isOpen ? "hidden" : ""} custom-scrollbar absolute max-h-52 w-full divide-y divide-gray-100 rounded-lg border bg-white shadow`}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="states-button"
          ref={ref}
        >
          {values.map((value, index) => (
            <li key={index}>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  setValue(value);
                  onSelect(value);
                }}
              >
                <div className="inline-flex items-center">{value}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
