import { allowedCancel } from "../../../Core/utils/orderUtils";
import ProductItemCart from "../../Cart/ProductItemCart";
import useCancelLine from "../useCancelLine";

/* eslint-disable react/prop-types */
export default function OrderLines({ order }) {
  const { isLoading, cancelLine } = useCancelLine();
  function onRemoveItem(id) {
    cancelLine({ orderLineId: id });
  }
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">Items</h2>
      <div className="space-y-4">
        {order.lines.map((item) => (
          <ProductItemCart
            key={item.id}
            readonly={true}
            productItem={item}
            quantity={item.quantity}
            isLoading={isLoading}
            remove="Cancel"
            canRemove={allowedCancel.includes(order.status) && !item.isCanceled}
            cancel={item.isCanceled}
            onRemoveItem={() => onRemoveItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
