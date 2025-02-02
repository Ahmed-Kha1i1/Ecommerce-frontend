/* eslint-disable react/prop-types */

// Reusable component for displaying a payment method
function PaymentMethod({ id, label, description, onChange, checked }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={id}
            aria-describedby={`${id}-text`}
            type="radio"
            name="payment-method"
            value={id}
            className="text-primary-600 focus:ring-primary-600 h-4 w-4 border-gray-300 bg-white focus:ring-2"
            checked={checked} // Use the checked prop to control the radio button
            onChange={onChange} // Attach the onChange handler here
          />
        </div>
        <div className="ms-4 text-sm">
          <label
            htmlFor={id}
            className="font-medium leading-none text-gray-900"
          >
            {label}
          </label>
          <p
            id={`${id}-text`}
            className="mt-1 text-xs font-normal text-gray-500"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
