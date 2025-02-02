import useCartItemCount from "../../Core/Hooks/useCartItemCount";

function CartHeader() {
  const { totalCartItems } = useCartItemCount();
  return (
    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
      Shopping Cart ({totalCartItems || 0})
    </h2>
  );
}

export default CartHeader;
