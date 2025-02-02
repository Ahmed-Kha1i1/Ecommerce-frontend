/* eslint-disable react/prop-types */
import { CiCalendar, CiDeliveryTruck } from "react-icons/ci";
import {
  formatCurrency,
  formatDateToShortFormat,
} from "../../../Core/utils/FormatUtils";

function OrderOverview({ order }) {
  const total = order.totalPrice + order.deliveryFees + order.paymentFees;

  return (
    <div className="mb-6 space-y-1 border-b pb-6">
      <p className="text-gray-600">Order #{order.orderId}</p>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <CiCalendar className="h-5 w-5 text-gray-600" />

          <span>Ordered on: {formatDateToShortFormat(order.orderDate)}</span>
        </div>
        {order.deliveryDate && (
          <div className="flex items-center gap-1">
            <CiDeliveryTruck className="h-5 w-5 text-gray-600" />

            <span>Expected delivery by: {formatDateToShortFormat(total)}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div>Total: </div>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}

export default OrderOverview;
