/* eslint-disable react/prop-types */
import { FiMinus, FiPlus } from "react-icons/fi";

function ChangeValue({
  decreaseDisabled,
  increaseDisabled,
  value,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        id="decrement-button-2"
        data-input-counter-decrement="counter-input-2"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        disabled={decreaseDisabled}
        onClick={onDecrease}
      >
        <FiMinus />
      </button>
      <input
        type="text"
        id="counter-input-2"
        data-input-counter
        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
        placeholder=""
        value={value}
        required
        readOnly
      />
      <button
        type="button"
        id="increment-button-2"
        data-input-counter-increment="counter-input-2"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        disabled={increaseDisabled}
        onClick={onIncrease}
      >
        <FiPlus />
      </button>
    </div>
  );
}

export default ChangeValue;
