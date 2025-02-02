/* eslint-disable react/prop-types */
import { globalDecimalPlaces } from "../../../Constants";
import { formatToFixed } from "../../../Core/utils/helpers";

function ItemDiscount({ selectedItem }) {
  const hasDiscount = !!selectedItem?.discountRate;
  if (!hasDiscount) return null;
  return (
    <>
      <div>
        <del className="text-xl text-gray-500">
          ${formatToFixed(selectedItem.price, globalDecimalPlaces)}
        </del>
      </div>
      <div className="flex-1">
        <p className="text-xl font-semibold text-green-500">
          Save {selectedItem.discountRate}%
        </p>
      </div>
    </>
  );
}

export default ItemDiscount;
