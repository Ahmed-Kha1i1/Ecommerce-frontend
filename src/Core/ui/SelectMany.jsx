import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

/* eslint-disable react/prop-types */
function SelectMany({
  id,
  label,
  control,
  validationRule,
  error,
  disabled = false,
  children,
}) {
  return (
    <div className="w-full min-w-[200px]">
      <label htmlFor={id} className="mb-2 block text-sm text-gray-600">
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        rules={validationRule}
        render={({ field }) => (
          <div className="relative">
            <select
              className="mb-2 block w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              disabled={disabled}
              data-fail={!!error?.message}
              {...field}
              id={id}
            >
              {children}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        )}
      />
      {error?.message && <ErrorMessage message={error?.message} />}
    </div>
  );
}

export default SelectMany;
