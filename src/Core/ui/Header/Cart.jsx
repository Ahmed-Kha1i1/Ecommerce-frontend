import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartItemCount from "../../Hooks/useCartItemCount";
function Cart() {
  const { totalCartItems } = useCartItemCount();

  return (
    <div className="relative">
      <span className="absolute right-2 top-[3px] box-border block min-h-4 min-w-4 translate-x-1/2 transform rounded-full bg-orange-400 px-1 text-center text-xs font-semibold text-white">
        {totalCartItems || 0}
      </span>
      <Link
        id="cart-dropdown"
        to="/cart"
        data-tooltip-target="tooltip-toggle"
        type="button"
        className="btn block cursor-pointer rounded-lg p-2.5 text-sm text-white focus:outline-none"
      >
        <FaCartPlus className="h-5 w-5" />
      </Link>
    </div>
  );
}

export default Cart;
