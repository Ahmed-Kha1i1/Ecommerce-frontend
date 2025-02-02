/* eslint-disable react/prop-types */
import { Controller, useWatch } from "react-hook-form";
import Radio from "../../../Core/ui/Radio";
import FilterSection from "./FilterSection";
import HeaderWithReset from "./HeaderWithReset";
import useBrands from "../useBrands";
import { filterKeys } from "../../../Core/Hooks/useFilterParams";
import ErrorFallback from "../../../Core/ui/ErrorFallback";
import DefaultSkeleton from "../../../Core/ui/DefaultSkeleton";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const BrandName = "brandId";

function BrandsFilters({ control, setValue }) {
  const brandValue = useWatch({
    control,
    name: BrandName,
  });
  const [searchParams] = useSearchParams();

  const {
    isLoading,
    error,
    brands = [],
  } = useBrands({
    searchQuery: searchParams.get(filterKeys.SEARCH_QUERY),
    categoryId: searchParams.get(filterKeys.CATEGORY),
    condition: searchParams.get(filterKeys.CONDITION),
    stars: searchParams.get(filterKeys.RATE),
    minPrice: searchParams.get(filterKeys.MIN_PRICE),
    maxPrice: searchParams.get(filterKeys.MAX_PRICE),
  });

  useEffect(() => {
    const brandId = searchParams.get(filterKeys.BRAND_ID);

    const brandExists = brands.some((brand) => brand.id == brandId);

    if (brandExists) {
      setValue(BrandName, brandId);
    } else {
      setValue(BrandName, null);
    }
  }, [searchParams, brands, setValue]);

  if (isLoading) return <DefaultSkeleton />;

  if (error)
    return <ErrorFallback error={{ message: "Failed to load brands" }} />;

  const sortedBrand = brands.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <HeaderWithReset
        title="Brand"
        value={brandValue}
        onReset={() => setValue(BrandName, null)}
      />
      <Controller
        name={BrandName}
        control={control}
        render={({ field }) => {
          return (
            <FilterSection>
              {sortedBrand.map((brand) => (
                <Radio
                  key={brand.id}
                  id={brand.id}
                  value={brand.id}
                  onChange={field.onChange}
                  name={field.name}
                  checked={brandValue == brand.id}
                >
                  {brand.name}
                </Radio>
              ))}
            </FilterSection>
          );
        }}
      />
    </div>
  );
}

export default BrandsFilters;
