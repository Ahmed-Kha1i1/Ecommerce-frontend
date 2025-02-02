import useSession from "../Auth/useSession";
import CustomerCartItems from "./CustomerCartItems";
import GuestCartItems from "./GuestCartItems";

function CartItems() {
  const { isGuest } = useSession();

  if (isGuest) return <GuestCartItems />;
  else return <CustomerCartItems />;
}

export default CartItems;
