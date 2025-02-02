import VariationValue from "./VariationValue";

/* eslint-disable react/prop-types */
function VariationSelect({
  name,
  values = [],
  onSelect,
  selectedValue,
  enabledValues,
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-900">
        {name}: {selectedValue}
      </label>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, max-content))",
        }}
      >
        {values.map((value) => (
          <VariationValue
            key={value}
            value={value}
            isEnabled={enabledValues?.has(value)}
            isSelected={selectedValue === value}
            onClick={() => onSelect(name, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default VariationSelect;
