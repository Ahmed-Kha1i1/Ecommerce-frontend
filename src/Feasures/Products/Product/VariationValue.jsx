/* eslint-disable react/prop-types */
export default function VariationValue({
  value,
  isEnabled,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`flex cursor-pointer justify-center rounded-md border p-3 transition-all ${!isEnabled ? "border-dashed border-gray-400 opacity-40" : ""} ${isSelected ? "bg-indigo-700 text-white" : "hover:bg-gray-100"}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
