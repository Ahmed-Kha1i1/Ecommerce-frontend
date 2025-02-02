import { FcBinoculars } from "react-icons/fc";
import { Link } from "react-router-dom";

function NoResultsFound() {
  return (
    <div className="mb-20 mt-32 flex flex-1 flex-col items-center gap-5">
      <div className="rounded-full bg-gray-200 p-3">
        <FcBinoculars className="h-24 w-24" />
      </div>

      <p className="text-xl">No results found!</p>
      <p className="text-lg text-gray-700">
        Unfortunately we couldn&apos;t find any product.
      </p>
      <Link
        to="/"
        className="hover:text-primary-700 mt-4 cursor-pointer rounded-lg border border-gray-200 bg-blue-600 px-5 py-2 text-lg font-medium capitalize text-white hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
      >
        Go to homepage
      </Link>
    </div>
  );
}

export default NoResultsFound;
