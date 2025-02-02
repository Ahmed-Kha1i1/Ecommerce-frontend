/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { formatToFixed } from "../../Core/utils/helpers";
import Discount from "../../Core/ui/Discount";
import { Link } from "react-router-dom";
import ChangeValue from "./ChangeValue";
import ReadonlyQuantity from "./ReadonlyQuantity";

function ProductItemCart({
  productItem,
  quantity,
  isLoading = false,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemoveItem,
  remove = "Remove",
  readonly = false,
  canRemove = true,
  cancel = false,
  children,
}) {
  const hasDisount = !!productItem.discountRate;

  const PriceAfetrDiscount = hasDisount
    ? productItem.price * (1 - productItem.discountRate / 100)
    : 0;

  return (
    <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:justify-between md:gap-6 md:space-y-0">
        <Link
          to={`/products/${productItem.productId}?itemId=${productItem.id}`}
          className="shrink-0 md:order-1"
        >
          <img
            className="h-20 w-20"
            src={productItem.imageName}
            alt="imac image"
          />
        </Link>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          {readonly ? (
            <ReadonlyQuantity quantity={quantity} />
          ) : (
            <ChangeValue
              decreaseDisabled={quantity <= 1 || isLoading}
              increaseDisabled={
                quantity >= productItem.stockQuantity || isLoading
              }
              onDecrease={() => onDecreaseQuantity?.()}
              onIncrease={() => onIncreaseQuantity?.()}
              value={quantity}
            />
          )}
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-red-600">
              $
              {formatToFixed(
                hasDisount ? PriceAfetrDiscount : productItem.price,
                2,
              )}
            </p>
            {hasDisount && (
              <div className="text-sm font-bold text-gray-900">
                <span className="line-through">
                  ${formatToFixed(productItem.price, 2)}
                </span>
                <Discount percentage={productItem.discountRate} />
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col gap-2 md:order-2 md:max-w-md">
          <Link
            to={`/products/${productItem.productId}?itemId=${productItem.id}`}
            className={`${cancel ? "text-gray-500 line-through" : "text-gray-900"} text-lg font-[600] hover:underline`}
          >
            {productItem.title}
          </Link>
          <ul className="space-y-2 text-sm">
            {productItem.variations && productItem.variations.length > 0 && (
              <div className="mt-2">
                {productItem.variations.map((variation, index) => (
                  <span
                    key={index}
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {variation.name}: {variation.value}
                  </span>
                ))}
              </div>
            )}
          </ul>
          {children}
          {canRemove && (
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                disabled={isLoading}
                onClick={() => onRemoveItem?.()}
              >
                <IoClose className="me-1.5 h-5 w-5" /> {remove}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItemCart;
