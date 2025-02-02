import useSession from "../../Feasures/Auth/useSession";
import useCurrentCustomerCartDetails from "../../Feasures/Cart/Hooks/useCurrentCustomerCartDetails";
import useGuestCart from "../../Feasures/Cart/Hooks/useGuestCart";

function useCartItemCount() {
  const { isGuest } = useSession();

  const { totalCartItems: guestTotalCartItems } = useGuestCart();
  const {
    isLoading,
    error,
    cartDetails: customerCartDetails,
    customerTotalCartItems,
  } = useCurrentCustomerCartDetails();

  let totalCartItems = null;

  if (isGuest) {
    totalCartItems = guestTotalCartItems;
  } else if (customerCartDetails) {
    totalCartItems = customerTotalCartItems;
  }

  return { error, totalCartItems, isLoading };
}

export default useCartItemCount;
