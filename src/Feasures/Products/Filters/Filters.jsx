/* eslint-disable react/prop-types */
import FilterCategories from "./FilterCategories";
import RatingFilters from "./RatingFilters";
import BrandsFilters from "./BrandsFilters";
import PricesFilters from "./PricesFilters";
import ConditionFilters from "./ConditionFilters";
import { useEffect } from "react";
import useFilter from "./useFilter";

function Filters({ products }) {
  const { control, setValue, onSubmit } = useFilter();

  // Handle invalid price ranges
  const minPrice = products?.minPrice;
  const maxPrice = products?.maxPrice;
  const isPriceRangeValid =
    (minPrice || minPrice === 0) && maxPrice && minPrice <= maxPrice;

  useEffect(() => {
    if (isPriceRangeValid) {
      try {
        setValue("minPrice", Math.floor(Number(minPrice)));
        setValue("maxPrice", Math.ceil(Number(maxPrice)));
      } catch (err) {
        console.error("Failed to set price values:", err);
      }
    }
  }, [products?.minPrice, products?.maxPrice, setValue, isPriceRangeValid]);

  return (
    <form
      className="flex w-80 flex-col justify-start gap-y-2 border-r-[3px] border-light-gray p-3"
      onSubmit={onSubmit}
    >
      <FilterCategories />
      <BrandsFilters control={control} setValue={setValue} />
      <ConditionFilters control={control} setValue={setValue} />

      {isPriceRangeValid ? (
        <PricesFilters
          control={control}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setValue={setValue}
        />
      ) : null}

      <RatingFilters control={control} setValue={setValue} />

      <div className="flex min-h-24 flex-1 items-end justify-center space-x-4">
        <button
          type="submit"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 w-full rounded-lg bg-blue-600 px-5 py-2 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}

export default Filters;
