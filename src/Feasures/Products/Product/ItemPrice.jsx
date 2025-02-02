import { globalDecimalPlaces } from "../../../Constants";
import { formatToFixed } from "../../../Core/utils/helpers";

/* eslint-disable react/prop-types */
function ItemPrice({ productItems, selectedItem }) {
  const hasDiscount = !!selectedItem?.discountRate;

  const minPrice = productItems.reduce(
    (min, item) => {
      const effectivePrice = item.discountRate
        ? item.price * (1 - item.discountRate / 100)
        : item.price;
      return effectivePrice < min ? effectivePrice : min;
    },
    productItems[0]?.discountRate
      ? productItems[0].price * (1 - productItems[0].discountRate / 100)
      : productItems[0]?.price,
  );

  const maxPrice = productItems.reduce(
    (max, item) => {
      const effectivePrice = item.discountRate
        ? item.price * (1 - item.discountRate / 100)
        : item.price;
      return effectivePrice > max ? effectivePrice : max;
    },
    productItems[0]?.discountRate
      ? productItems[0].price * (1 - productItems[0].discountRate / 100)
      : productItems[0]?.price,
  );
  const style = "text-3xl font-bold text-indigo-600";

  if (!selectedItem) {
    if (minPrice != maxPrice) {
      return (
        <span className={style}>
          {`${formatToFixed(minPrice, globalDecimalPlaces)} - ${formatToFixed(maxPrice, globalDecimalPlaces)}`}
        </span>
      );
    } else {
      return (
        <span className={style}>
          {formatToFixed(minPrice, globalDecimalPlaces)}
        </span>
      );
    }
  }

  return (
    <span className={style}>
      {hasDiscount
        ? formatToFixed(
            selectedItem.price * (1 - selectedItem.discountRate / 100),
            globalDecimalPlaces,
          )
        : formatToFixed(selectedItem.price, globalDecimalPlaces)}
    </span>
  );
}

export default ItemPrice;
