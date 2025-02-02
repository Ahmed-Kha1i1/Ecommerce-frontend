/* eslint-disable react/prop-types */
// Reusable component for displaying a summary item
function SummaryItem({ label, value, isBold }) {
  return (
    <dl className="flex items-center justify-between gap-4 py-3">
      <dt
        className={`text-base font-normal text-gray-500 ${isBold ? "font-bold text-gray-900" : ""}`}
      >
        {label}
      </dt>
      <dd
        className={`text-base font-medium ${isBold ? "font-bold text-gray-900" : "text-gray-900"}`}
      >
        {value}
      </dd>
    </dl>
  );
}

export default SummaryItem;
