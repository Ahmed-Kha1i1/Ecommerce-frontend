import useSession from "../../Auth/useSession";
import useGuestItemsDetails from "./useGuestItemsDetails";
import useCurrentCustomerCartDetails from "./useCurrentCustomerCartDetails";
import useGuestCart from "./useGuestCart";

function useOrderSummary() {
  const { isGuest } = useSession();

  // Fetch cart details based on user type
  const {
    isLoading: isGuestCartLoading,
    error: guestError,
    cartDetails: guestCartItemsDetails,
  } = useGuestItemsDetails();

  const { cartItems: guestCartItems } = useGuestCart();

  const {
    isLoading: isCustomerCartLoading,
    cartError,
    cartDetails: customerCart,
  } = useCurrentCustomerCartDetails();

  const isLoading = isCustomerCartLoading || isGuestCartLoading;

  if (isLoading) {
    return { isLoading };
  }

  // Calculate prices based on user type
  const { originalPrice, discountPrice } = isGuest
    ? calculateGuestPrices(guestCartItems, guestCartItemsDetails)
    : calculateCustomerPrices(customerCart.items);

  return {
    originalPrice,
    discountPrice,
    error: guestError || cartError,
    isLoading,
  };
}

// Helper function to calculate prices for guest users
const calculateGuestPrices = (cartItems, cartDetails) => {
  const itemsMap = new Map(cartItems.map((item) => [item.id, item.quantity]));

  return cartDetails.reduce(
    (accumulator, item) => {
      const quantity = itemsMap.get(item.id) || 0;
      if (!quantity) return accumulator;

      const totalItemPrice = item.price * quantity;
      accumulator.originalPrice += totalItemPrice;

      if (item.discountRate) {
        const discount = (totalItemPrice * item.discountRate) / 100;
        accumulator.discountPrice += discount;
      }

      return accumulator;
    },
    { originalPrice: 0, discountPrice: 0 },
  );
};

// Helper function to calculate prices for authenticated customers
const calculateCustomerPrices = (cartItems) => {
  return cartItems.reduce(
    (accumulator, item) => {
      const quantity = item.quantity;
      const product = item.productItemDetails;

      if (!quantity) return accumulator;

      const totalItemPrice = product.price * quantity;
      accumulator.originalPrice += totalItemPrice;

      if (product.discountRate) {
        const discount = (totalItemPrice * product.discountRate) / 100;
        accumulator.discountPrice += discount;
      }

      return accumulator;
    },
    { originalPrice: 0, discountPrice: 0 },
  );
};

export default useOrderSummary;
