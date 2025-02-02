/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
import { globalDecimalPlaces, paymentMethods } from "../../Constants";
import Spinner from "../../Core/ui/Spinner";
import { formatToFixed } from "../../Core/utils/helpers";
import useOrderSummary from "./Hooks/useOrderSummary";
import { Link } from "react-router-dom";
// import useCurrentCustomer from "../Customers/Hooks/useCurrentCustomer";
import useCartItemCount from "../../Core/Hooks/useCartItemCount";
import useCurrentCustomer from "../Customers/Hooks/useCurrentCustomer";

// Base component for order summary
function BaseOrderSummary({
  children,
  buttonLabel,
  buttonLink,
  buttonOnClick,
  buttonDisabled = false,
  loadingOrder,
  total,
  originalPrice,
  discountPrice,
  totalCartItems,
}) {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>

      {!loadingOrder ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">
                Original price ({totalCartItems})
              </dt>
              <dd className="text-base font-medium text-gray-900">
                $ {formatToFixed(originalPrice, globalDecimalPlaces)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Savings</dt>
              <dd className="text-base font-medium text-green-600">
                -${formatToFixed(discountPrice, globalDecimalPlaces)}
              </dd>
            </dl>

            {children}

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">
                ${formatToFixed(total, globalDecimalPlaces)}
              </dd>
            </dl>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      {buttonOnClick ? (
        <button
          onClick={buttonOnClick}
          className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          disabled={buttonDisabled}
        >
          {buttonLabel}
        </button>
      ) : (
        <Link
          to={buttonLink}
          className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          disabled={buttonDisabled}
        >
          {buttonLabel}
        </Link>
      )}

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500"> or </span>
        <Link
          to="/Products"
          title=""
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline"
        >
          Continue Shopping
          <GoArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

// Cart-specific order summary
function CartOrderSummary() {
  const {
    originalPrice,
    discountPrice,
    isLoading: loadingOrder,
  } = useOrderSummary();
  const { totalCartItems } = useCartItemCount();
  const { customer, isLoading: loadingCustomer } = useCurrentCustomer();
  const total = originalPrice - discountPrice;

  return (
    <BaseOrderSummary
      buttonLabel="Proceed to Checkout"
      total={total}
      disabled={loadingCustomer}
      buttonLink={
        customer?.hasDefaultAddress ? "/Checkout" : "/Account/Addresses/Add"
      }
      loadingOrder={loadingOrder}
      originalPrice={originalPrice}
      discountPrice={discountPrice}
      totalCartItems={totalCartItems || 0}
    />
  );
}

// Order-specific order summary
function OrderPageSummary({ paymentMethod, loadingAddOrder, onOrder }) {
  const {
    originalPrice,
    discountPrice,
    isLoading: loadingOrder,
  } = useOrderSummary();
  const { totalCartItems } = useCartItemCount();
  const DeliveryFees = 35;
  const paymentDoorFees = 15;
  const isDoorDelevary = paymentMethod == paymentMethods[0];
  const total =
    originalPrice -
    discountPrice +
    DeliveryFees +
    (isDoorDelevary ? paymentDoorFees : 0);

  return (
    <BaseOrderSummary
      buttonLabel="Confirm Order"
      buttonOnClick={onOrder}
      buttonDisabled={loadingAddOrder || loadingOrder}
      total={total}
      loadingOrder={loadingOrder}
      originalPrice={originalPrice}
      discountPrice={discountPrice}
      totalCartItems={totalCartItems || 0}
      paymentMethod={paymentMethod}
    >
      <dl className="flex items-center justify-between gap-4">
        <dt className="text-base font-normal text-gray-500">Delivery Fees</dt>
        <dd className="text-base font-medium text-gray-900">
          ${DeliveryFees}.00
        </dd>
      </dl>
      <dl className="flex items-center justify-between gap-4">
        <dt className="text-base font-normal text-gray-500">Payment Method</dt>
        <dd className="text-base font-medium text-gray-900">
          {isDoorDelevary ? paymentDoorFees : 0}
        </dd>
      </dl>
    </BaseOrderSummary>
  );
}

export { CartOrderSummary, OrderPageSummary };
