import CartHeader from "../../Feasures/Cart/CartHeader";
import CartItems from "../../Feasures/Cart/CartItems";
import EmptyCart from "../../Feasures/Cart/EmptyCart";
import { CartOrderSummary } from "../../Feasures/Cart/OrderSummary";
import useCartItemCount from "../Hooks/useCartItemCount";
import ErrorFallback from "../ui/ErrorFallback";
import Spinner from "../ui/Spinner";

function CartPage() {
  const { totalCartItems, isLoading, error } = useCartItemCount();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorFallback error={error} />;

  return (
    <section className="container mx-auto rounded-md bg-white py-8 antialiased md:py-16">
      {totalCartItems ? (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <CartHeader />

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <CartItems />
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <CartOrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default CartPage;
