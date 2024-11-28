import { FaCartPlus } from "react-icons/fa";

function ToggleCart() {
  return (
    <button
      id="cart-dropdown"
      data-tooltip-target="tooltip-toggle"
      type="button"
      className="rounded-lg p-2.5 text-sm text-white focus:outline-none"
    >
      <FaCartPlus className="h-5 w-5 hover:text-gray-100" />
    </button>
  );
}

export default ToggleCart;
