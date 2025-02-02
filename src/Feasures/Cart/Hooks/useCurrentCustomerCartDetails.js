import useCustomerCartDetails from "./useCustomerCartDetails";

function useCurrentCustomerCartDetails() {
  const { isLoading, error, cartDetails } = useCustomerCartDetails();

  let customerTotalCartItems = 0;
  if (cartDetails?.items)
    customerTotalCartItems = cartDetails.items.reduce(
      (total, item) => total + item.quantity,
      0,
    );

  return { isLoading, error, cartDetails, customerTotalCartItems };
}

export default useCurrentCustomerCartDetails;
