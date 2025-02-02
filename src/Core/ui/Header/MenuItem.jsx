import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function MenuItem({ text, onClick, to, disabled }) {
  const className =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center";
  if (to)
    return (
      <li>
        <Link to={to} role="menuitem" className={className} disabled={disabled}>
          {text}
        </Link>
      </li>
    );

  return (
    <li>
      <button
        role="menuitem"
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </li>
  );
}

export default MenuItem;
