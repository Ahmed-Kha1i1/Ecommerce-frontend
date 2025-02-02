import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import {
  allowedCancel,
  getStatusColor,
  getStatusLabel,
} from "../../../Core/utils/orderUtils";
import useOrderDetails from "./useOrderDetails";
import AccountTitle from "../../Customers/AccountTitle";
import AddressDetails from "./AddressDetails";
import OrderSummary from "./OrderSummary";
import OrderLines from "./OrderLines";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import useCancelOrder from "../useCancelOrder";
import Skeleton from "../../../Core/ui/Skeleton";
import ErrorFallback from "../../../Core/ui/ErrorFallback";

export default function OrderDetails() {
  const { id } = useParams();
  const { isLoading, order, error } = useOrderDetails(id);
  const { isLoading: isCanceling, cancelOrder } = useCancelOrder();
  const canCancel = allowedCancel.includes(order?.status);

  function handleCancelOrder() {
    cancelOrder({ orderId: order.orderId });
  }
  if (isLoading) {
    return <Skeleton />;
  }

  if (error) return <ErrorFallback error={error} />;

  return (
    <div className="">
      {/* Order Header */}
      <AccountTitle>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Link to="/Account/Orders/index" className="text-2xl">
              <GoArrowLeft />
            </Link>
            <h1 className="text-2xl font-semibold">Order Details</h1>
          </div>
          <div
            className={`rounded-full px-4 py-2 text-base font-normal ${getStatusColor(order.status)}`}
          >
            {getStatusLabel(order.status)}
          </div>
          {canCancel && (
            <button
              onClick={handleCancelOrder}
              disabled={isCanceling || isLoading}
              className="mt-2 rounded-lg bg-red-600 px-2 py-1 text-sm text-white transition-colors duration-200 hover:bg-red-700 disabled:bg-red-300"
            >
              {isCanceling ? "Canceling..." : "Cancel Order"}
            </button>
          )}
        </div>
      </AccountTitle>
      <OrderOverview order={order} />

      {/* Order Items */}
      <OrderLines order={order} />

      {/* Shipping and Payment */}
      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <AddressDetails orderAddress={order.orderAddress} />
        <OrderPayment order={order} />
      </div>

      {/* Order Summary */}
      <OrderSummary order={order} />
    </div>
  );
}
