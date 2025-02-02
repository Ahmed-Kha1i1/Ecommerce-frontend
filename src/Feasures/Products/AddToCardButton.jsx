/* eslint-disable react/prop-types */
import { BiCartDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

function AddToCardButton({ to, onClick, disabled = false }) {
  const className =
    "bottom-0 flex w-full cursor-pointer items-center justify-center gap-3 self-end rounded-lg bg-blue-700 px-5 py-2.5 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300";
  if (to) {
    return (
      <Link to={to} className={className} disabled={disabled}>
        <BiCartDownload className="size-5" />
        <span>Add to cart</span>
      </Link>
    );
  } else
    return (
      <button
        onClick={(e) => onClick?.(e)}
        className={className}
        disabled={disabled}
      >
        <BiCartDownload className="size-5" />
        <span>Add to cart</span>
      </button>
    );
}

export default AddToCardButton;
