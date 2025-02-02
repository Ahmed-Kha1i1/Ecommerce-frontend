import { useDispatch, useSelector } from "react-redux";
import {
  addAmountToItem,
  addItem,
  clearCart,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../Core/GlobalStates/cartSlice";
import useToast from "../../../Core/ui/Toast/useToast";
import { toastTypes } from "../../../Constants";

function useGuestCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const { showToast } = useToast();

  const handleAddItem = (id, quantity, stockQuantity) => {
    if (stockQuantity < 1) {
      showToast("This item is currently out of stock", toastTypes.Error);
      return;
    }

    const existingItem = cartItems.find((i) => i.id === id);
    if (!existingItem) {
      dispatch(addItem({ id: id, quantity }));
      showToast("Product added successfully", toastTypes.Success);
    } else if (existingItem.quantity < stockQuantity) {
      const amount =
        existingItem.quantity + quantity <= stockQuantity
          ? quantity
          : stockQuantity - existingItem.quantity;

      dispatch(addAmountToItem({ id: id, amount }));
      showToast("Item quantity has been updated", toastTypes.Success);
    } else {
      showToast(
        "You've reached the maximum quantity available for this item",
        toastTypes.Error,
      );
    }
  };

  const handleRemoveItem = (id) => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (existingItem) {
      dispatch(removeItem(id));
      showToast("Product was removed from cart", toastTypes.Warning);
    } else {
      showToast("Invalid data", toastTypes.Error);
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseItem = (id, stockQuantity) => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (existingItem && existingItem.quantity < stockQuantity) {
      dispatch(increaseItem(id));
      showToast("Item quantity has been updated", toastTypes.Success);
    } else {
      showToast("Invalid data", toastTypes.Error);
    }
  };

  const handleDecreaseItem = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (!existingItem) {
      showToast("Invalid data", toastTypes.Error);
      return;
    }

    if (existingItem.quantity === 1) {
      dispatch(removeItem(id));
      showToast("Product was removed from cart", toastTypes.Warning);
    } else {
      dispatch(decreaseItem(id));
      showToast("Item quantity has been updated", toastTypes.Success);
    }
  };

  const handleAddAmountToItem = (id, amount, stockQuantity) => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (!existingItem) {
      showToast("Invalid data", toastTypes.Error);
      return;
    }

    if (existingItem.quantity < stockQuantity) {
      const newAmount =
        existingItem.quantity + amount <= stockQuantity
          ? amount
          : stockQuantity - existingItem.quantity;
      dispatch(addAmountToItem({ id: id, amount: newAmount }));
      showToast("Item quantity has been updated", toastTypes.Success);
    } else {
      showToast(
        "You've reached the maximum quantity available for this item",
        toastTypes.Error,
      );
    }
  };

  return {
    cartItems,
    totalCartItems,
    handleAddItem,
    handleRemoveItem,
    handleClearCart,
    handleIncreaseItem,
    handleDecreaseItem,
    handleAddAmountToItem,
  };
}

export default useGuestCart;
