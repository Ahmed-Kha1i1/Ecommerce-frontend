import { useForm } from "react-hook-form";
import { filterKeys } from "../../../Core/Hooks/useFilterParams";
import { useSearchParams } from "react-router-dom";

function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brandId: searchParams.get(filterKeys.BRAND_ID),
      condition: searchParams.get(filterKeys.CONDITION),
      minPrice: searchParams.get(filterKeys.MIN_PRICE),
      maxPrice: searchParams.get(filterKeys.MAX_PRICE),
      rate: searchParams.get(filterKeys.RATE),
    },
  });

  function onSubmit(values) {
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });

    setSearchParams(searchParams);
  }

  return { control, setValue, onSubmit: handleSubmit(onSubmit), errors };
}

export default useFilter;
