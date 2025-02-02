/* eslint-disable react/prop-types */
import { getPaymentMethod } from "../../../Core/utils/orderUtils";

function OrderPayment({ order }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-xl font-semibold">Payment Method</h2>
      </div>
      <div className="rounded-lg border p-4">
        <p className="font-medium">{getPaymentMethod(order.paymentMethod)}</p>
      </div>
    </div>
  );
}

export default OrderPayment;
