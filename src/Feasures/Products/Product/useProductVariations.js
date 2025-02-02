import { useState } from "react";

function useProductVariations({ productItems, onSelectItem }) {
  const variations = new Map();
  productItems.forEach((item) => {
    item.variations.forEach((value, key) => {
      if (!variations.has(key)) {
        variations.set(key, new Set());
      }
      variations.get(key).add(value);
    });
  });

  const [selectedVariations, setSelectedVariations] = useState(() => {
    const initialSelected = {};
    Array.from(variations.keys()).forEach((key) => {
      initialSelected[key] = "";
    });
    return initialSelected;
  });

  const [enabledValues, setEnabledValues] = useState(new Map(variations));

  function onSelect(variationName, value) {
    handleEnabledValues(variationName, value);
  }

  function handleEnabledValues(variationName, variationValue) {
    const newEnabledValues = new Map();

    productItems.forEach((item) => {
      const value = item.variations.get(variationName);
      const hasValue = value == variationValue;
      if (hasValue) {
        item.variations.forEach((value, key) => {
          if (!newEnabledValues.has(key)) {
            newEnabledValues.set(key, new Set([value]));
          }
          newEnabledValues.get(key).add(value);
        });
      }
    });

    let newSelectedValiations = {};

    variations.forEach((_, key) => {
      if (key === variationName) {
        newSelectedValiations[key] = variationValue;
      } else {
        const selectedValue = selectedVariations[key];
        const KeyEnabledValues = newEnabledValues.get(key);

        if (!KeyEnabledValues?.has(selectedValue)) {
          if (KeyEnabledValues?.size === 1) {
            newSelectedValiations[key] = KeyEnabledValues.values().next().value;
          } else {
            newSelectedValiations[key] = "";
          }
        } else {
          newSelectedValiations[key] = selectedValue;
        }
      }
    });

    const newselectedItem = productItems.find((item) =>
      Array.from(item.variations.entries()).every(
        ([key, itemValue]) => newSelectedValiations[key] === itemValue,
      ),
    );
    onSelectItem(newselectedItem || null);
    setSelectedVariations(newSelectedValiations);
    setEnabledValues(newEnabledValues);
  }
  return {
    variations,
    selectedVariations,
    enabledValues,
    onSelect,
  };
}

export default useProductVariations;
