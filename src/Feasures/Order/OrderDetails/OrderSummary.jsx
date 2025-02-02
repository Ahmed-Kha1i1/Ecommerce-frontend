import { formatCurrency } from "../../../Core/utils/FormatUtils";

/* eslint-disable react/prop-types */
export default function OrderSummary({ order }) {
  const total = order.totalPrice + order.deliveryFees + order.paymentFees;

  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

      <div className="space-y-2 rounded-lg border p-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(order.totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatCurrency(order.deliveryFees)}</span>
        </div>
        <div className="flex justify-between">
          <span>Payment Processing Fee</span>
          <span>{formatCurrency(order.paymentFees)}</span>
        </div>
        <div className="mt-2 border-t pt-2">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
