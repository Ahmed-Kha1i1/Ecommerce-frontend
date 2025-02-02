import { useEffect } from "react";
import useMergeShoppingCarts from "../../Feasures/Cart/Hooks/useMergeShoppingCarts";
import useGuestCart from "../../Feasures/Cart/Hooks/useGuestCart";

import useSession from "../../Feasures/Auth/useSession";

function useMergeCarts() {
  const { isGuest, session } = useSession();
  const { cartItems, handleClearCart } = useGuestCart();
  const { mergeCarts, isLoading } = useMergeShoppingCarts();

  useEffect(() => {
    if (!isGuest && cartItems.length && !isLoading) {
      const customerId = session.customerId;
      const productItems = cartItems.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          CreatedDate: new Date(item.AddedDate),
        };
      });

      mergeCarts(
        { customerId, productItems },
        {
          onSuccess: () => {
            handleClearCart();
          },
        },
      );
    }
  }, [isGuest, cartItems, session.customerId]);
}

export default useMergeCarts;
