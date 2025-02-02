import { useMemo } from "react";
import useCurrentCustomerCartDetails from "./Hooks/useCurrentCustomerCartDetails";
import useRemoveCartItem from "../Cart/Hooks/useRemoveCartItem";
import useUpdateCartItemQuantity from "../Cart/Hooks/useUpdateCartItemQuantity";
import ProductItemCart from "./ProductItemCart";
import Spinner from "../../Core/ui/Spinner";

function CustomerCartItems() {
  const { isLoading: isCartLoading, cartDetails } =
    useCurrentCustomerCartDetails();

  const { isLoading: isRemoving, removeCartItem } = useRemoveCartItem();
  const { isLoading: isUpdating, updateCartItem } = useUpdateCartItemQuantity();
  const IsEditing = isRemoving || isUpdating;

  const sortedItems = useMemo(() => {
    // Clone the array to avoid mutating the original data
    const itemsCopy = [...cartDetails.items];

    // Sort (newest first)
    itemsCopy.sort((a, b) => {
      const dateA = new Date(a.createdDate).getTime();
      const dateB = new Date(b.createdDate).getTime();
      return dateB - dateA;
    });

    return itemsCopy;
  }, [cartDetails.items]);

  if (isCartLoading) return <Spinner />;

  function handleDecreaseItem(item) {
    const newQuantity = item.quantity - 1;

    if (newQuantity >= 1) {
      updateCartItem({
        productItemId: item.productItemDetails.id,
        newQuantity,
      });
    }
  }

  function handleIncreaseItem(item) {
    const newQuantity = item.quantity + 1;

    if (newQuantity <= item.productItemDetails.stockQuantity) {
      updateCartItem({
        productItemId: item.productItemDetails.id,
        newQuantity,
      });
    }
  }

  function handleRemoveItem(item) {
    removeCartItem({ productItemId: item.productItemDetails.id });
  }

  // eslint-disable-next-line no-unused-vars
  function handleSaveItem(item) {
    console.log(`Save item functionality not implemented yet`);
  }

  return (
    <>
      {sortedItems.map((item) => (
        <ProductItemCart
          key={item.id}
          productItem={item.productItemDetails}
          quantity={item.quantity}
          isLoading={IsEditing}
          onDecreaseQuantity={() => handleDecreaseItem(item)}
          onIncreaseQuantity={() => handleIncreaseItem(item)}
          onRemoveItem={() => handleRemoveItem(item)}
          onSaveItem={() => handleSaveItem(item)}
        />
      ))}
    </>
  );
}

export default CustomerCartItems;
