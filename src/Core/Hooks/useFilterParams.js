import { useSearchParams } from "react-router-dom";

export default function useFilterParams() {
  const [searchParams, setSearchParamsInternal] = useSearchParams();

  function get(key) {
    const rule = filterRules[key];

    if (!rule) return null;

    const value = searchParams.get(key);

    if (rule.validate(value)) {
      return value;
    } else {
      return rule.default;
    }
  }

  function set(key, value) {
    searchParams.set(key, value);
  }

  function setSearchParams() {
    setSearchParamsInternal(searchParams);
  }
  return [{ get, set }, setSearchParams, searchParams];
}

export const filterRules = {
  category: {
    validate: (value) => /^[0-9]+$/.test(value),
    default: null,
  },
  // searchQuery
  q: {
    validate: () => true,
    default: null,
  },
  brandId: {
    validate: (value) => /^[0-9]+$/.test(value),
    default: null,
  },
  condition: {
    validate: (value) => /^[0-1]$/.test(value),
    default: null,
  },
  rate: {
    validate: (value) => /^[1-5]$/.test(value),
    default: null,
  },
  minPrice: {
    validate: (value) => /^[0-9]+$/.test(value),
    default: null,
  },
  maxPrice: {
    validate: (value) => /^[0-9]+$/.test(value),
    default: null,
  },
  orderBy: {
    validate: (value) => ["price", "stars"].includes(value?.toLowerCase()),
    default: "stars",
  },
  //order direction
  d: {
    validate: (value) => ["asc", "desc"].includes(value?.toLowerCase()),
    default: "desc",
  },
  page: {
    validate: (value) => /^[1-9][0-9]*$/.test(value),
    default: "1",
  },
};

export const filterKeys = {
  CATEGORY: "category",
  SEARCH_QUERY: "q", // abbreviated for "searchQuery"
  BRAND_ID: "brandId",
  CONDITION: "condition",
  RATE: "rate",
  MIN_PRICE: "minPrice",
  MAX_PRICE: "maxPrice",
  ORDER_BY: "orderBy",
  ORDER_DIRECTION: "d", // abbreviated for "order direction"
  PAGE: "page",
};
