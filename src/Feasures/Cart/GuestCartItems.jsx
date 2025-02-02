import { useNavigate } from "react-router-dom";
import Spinner from "../../Core/ui/Spinner";
import ProductItemCart from "./ProductItemCart";
import useGuestCart from "./Hooks/useGuestCart";
import useGuestItemsDetails from "./Hooks/useGuestItemsDetails";
import ErrorFallback from "../../Core/ui/ErrorFallback";

function GuestCartItems() {
  const { isLoading, cartDetails, error } = useGuestItemsDetails();
  const navigate = useNavigate();
  const {
    cartItems,
    handleDecreaseItem,
    handleIncreaseItem,
    handleRemoveItem: handleRemoveItemSlice,
  } = useGuestCart();

  // Create a Map with id as key and an object containing quantity and AddedDate as value
  const itemsMap = new Map(
    cartItems.map((item) => [
      item.id,
      { quantity: item.quantity, addedDate: item.AddedDate },
    ]),
  );

  function handleSaveItem() {
    navigate("/login");
  }

  if (isLoading) return <Spinner />;

  // Filter cartDetails to include only items present in cartItems
  const filteredCartDetails = cartDetails.filter((item) =>
    itemsMap.has(item.id),
  );

  // Sort (newest first)
  const sortedCartDetails = filteredCartDetails.sort((a, b) => {
    const aAddedDate = itemsMap.get(a.id).addedDate;
    const bAddedDate = itemsMap.get(b.id).addedDate;
    return bAddedDate - aAddedDate;
  });

  if (error) return <ErrorFallback error={error} />;
  return (
    <>
      {sortedCartDetails.map((item) => {
        const { quantity } = itemsMap.get(item.id);
        return (
          <ProductItemCart
            key={item.id}
            productItem={item}
            quantity={quantity}
            onDecreaseQuantity={() => handleDecreaseItem(item.id)}
            onIncreaseQuantity={() =>
              handleIncreaseItem(item.id, item.stockQuantity)
            }
            onRemoveItem={() => handleRemoveItemSlice(item.id)}
            onSaveItem={handleSaveItem}
          />
        );
      })}
    </>
  );
}

export default GuestCartItems;
