import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <RiShoppingCart2Fill className="h-24 w-24 rounded-full bg-gray-200 p-3 text-blue-600" />
      <h3 className="text-lg font-semibold">Your cart is empty!</h3>
      <p>Start shopping now and uncover great deals on your favorite items!</p>
      <Link
        to={`/`}
        className="bottom-0 mx-auto flex cursor-pointer items-center justify-center gap-3 self-end rounded-lg bg-blue-700 px-5 py-2.5 text-base font-medium text-white shadow-selected-card hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
