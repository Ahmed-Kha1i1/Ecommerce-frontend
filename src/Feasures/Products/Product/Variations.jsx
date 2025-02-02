/* eslint-disable react/prop-types */
import ProductVariationDetails from "./ProductVariationDetails";
import VariationSelect from "./VariationSelect";

function Variations({
  variations,
  selectedVariations,
  enabledValues,
  selectedItem,
  onSelect,
  isOneItem,
}) {
  const sortedVariations = new Map(
    [...variations.entries()].sort(
      ([, setA], [, setB]) => setA.size - setB.size,
    ),
  );

  if (isOneItem) return <ProductVariationDetails productItem={selectedItem} />;
  else
    return (
      <div className="flex flex-col gap-3">
        {Array.from(sortedVariations).map(([key, values]) => (
          <VariationSelect
            key={key}
            name={key}
            values={Array.from(values)}
            onSelect={onSelect}
            selectedValue={selectedVariations[key]}
            enabledValues={enabledValues.get(key)}
          />
        ))}
      </div>
    );
}

export default Variations;
