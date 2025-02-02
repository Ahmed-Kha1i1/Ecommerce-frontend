import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";

/* eslint-disable react/prop-types */
function ErrorFallback({
  error,
  resetErrorBoundary,
  message = "Something went wrong",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-5 ${className}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <FiAlertCircle className="h-8 w-8 text-red-600" />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-gray-900">{message}</h2>
      {error && (
        <p className="mb-4 text-center text-sm text-gray-600">
          {error.message}
        </p>
      )}
      {resetErrorBoundary && (
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <FiRefreshCw className="mr-2 h-4 w-4" />
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorFallback;
