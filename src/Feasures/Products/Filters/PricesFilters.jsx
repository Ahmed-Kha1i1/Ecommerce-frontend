/* eslint-disable react/prop-types */
import { Controller, useWatch } from "react-hook-form";
import FilterSection from "./FilterSection";
import { useState } from "react";
import HeaderWithReset from "./HeaderWithReset";

function PricesFilters({ control, minPrice, maxPrice, setValue }) {
  const ProductsMinPrice = Math.floor(Number(minPrice));
  const ProductsMaxPrice = Math.ceil(Number(maxPrice));

  const [minPriceValue, setMinPriceValue] = useState(ProductsMinPrice);
  const [maxPriceValue, setMaxPriceValue] = useState(ProductsMaxPrice);

  const isPriceRangeValid =
    (minPrice || minPrice === 0) && maxPrice && minPrice <= maxPrice;

  // Watch both price values to determine if filters are active
  const minPriceWatch = useWatch({
    control,
    name: "minPrice",
  });
  const maxPriceWatch = useWatch({
    control,
    name: "maxPrice",
  });

  // Check if either price filter is active
  const isPriceFilterActive =
    (minPriceWatch && minPriceWatch !== ProductsMinPrice) ||
    (maxPriceWatch && maxPriceWatch !== ProductsMaxPrice);

  function handleMinChangeBlur(event) {
    const value = Number(event.target.value);
    const min = Number(event.target.min);
    const max = Number(event.target.max);

    if (isNaN(value) || value < min) {
      event.target.value = min;
    } else if (value >= max) {
      event.target.value = max;
    }

    setMinPriceValue(event.target.value);
  }

  function handleMaxChangeBlur(event) {
    const value = Number(event.target.value);
    const min = Number(event.target.min);
    const max = Number(event.target.max);

    if (isNaN(value) || value > max) {
      event.target.value = max;
    } else if (value < min) {
      event.target.value = min;
    }

    setMaxPriceValue(event.target.value);
  }

  function handleReset() {
    setValue("minPrice", ProductsMinPrice);
    setValue("maxPrice", ProductsMaxPrice);
    setMinPriceValue(ProductsMinPrice);
    setMaxPriceValue(ProductsMaxPrice);
  }

  if (!isPriceRangeValid) return null;

  return (
    <div>
      <HeaderWithReset
        title="Price Range"
        onReset={handleReset}
        value={isPriceFilterActive}
      />
      <FilterSection>
        <div className="col-span-2 flex items-center justify-between space-x-3">
          <Controller
            name="minPrice"
            control={control}
            render={({ field }) => {
              return (
                <div className="w-full">
                  <label
                    htmlFor="min-price"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    From
                  </label>

                  <input
                    type="number"
                    id="min-price"
                    value={field.value || ProductsMinPrice}
                    min={ProductsMinPrice}
                    max={maxPriceValue}
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder=""
                    onChange={field.onChange}
                    onBlur={handleMinChangeBlur}
                    name={field.name}
                  />
                </div>
              );
            }}
          />
          <Controller
            name="maxPrice"
            control={control}
            render={({ field }) => {
              return (
                <div className="w-full">
                  <label
                    htmlFor="max-price"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    To
                  </label>

                  <input
                    type="number"
                    id="max-price"
                    value={field.value || ProductsMaxPrice}
                    min={minPriceValue}
                    max={ProductsMaxPrice}
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder=""
                    required
                    onChange={field.onChange}
                    onBlur={handleMaxChangeBlur}
                    name={field.name}
                  />
                </div>
              );
            }}
          />
        </div>
      </FilterSection>
    </div>
  );
}

export default PricesFilters;
