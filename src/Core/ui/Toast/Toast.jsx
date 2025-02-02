/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { toastTime } from "../../../Constants";

const toastStyles = {
  Error: {
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    buttonBgColor: "bg-red-50",
    buttonTextColor: "text-red-500",
    buttonHoverBgColor: "hover:bg-red-200",
    ringColor: "focus:ring-red-400",
  },
  Success: {
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    buttonBgColor: "bg-green-50",
    buttonTextColor: "text-green-500",
    buttonHoverBgColor: "hover:bg-green-200",
    ringColor: "focus:ring-green-400",
  },
  Warning: {
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-800",
    buttonBgColor: "bg-yellow-50",
    buttonTextColor: "text-yellow-500",
    buttonHoverBgColor: "hover:bg-yellow-200",
    ringColor: "focus:ring-yellow-400",
  },
  Info: {
    bgColor: "bg-gray-50",
    textColor: "text-gray-800",
    buttonBgColor: "bg-gray-50",
    buttonTextColor: "text-gray-500",
    buttonHoverBgColor: "hover:bg-gray-200",
    ringColor: "focus:ring-gray-400",
  },
};

function Toast({ type, message, onClose }) {
  const styles = toastStyles[type] || toastStyles.Info;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, toastTime * 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`shadow-soft-shadow ${styles.bgColor} ${styles.textColor} w-full py-3`}
      role="alert"
    >
      <div className="mx-4 flex items-center sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
        <div className="flex-center box-border flex-1">
          <div className="flex-center">
            <svg
              className="mr-4 h-4 w-4 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">{type}</span>
            <div className="text-base">{message}</div>
          </div>
        </div>
        <button
          type="button"
          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${styles.buttonBgColor} p-1.5 ${styles.buttonTextColor} ${styles.buttonHoverBgColor} ${styles.ringColor}`}
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
