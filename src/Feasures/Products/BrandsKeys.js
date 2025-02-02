const BrandDetailTypes = {
  ID: "id",
};

const BrandsKeys = {
  all: ["Brands"],
  lists: () => [...BrandsKeys.all, "list"],
  list: (filter) => [...BrandsKeys.lists(), { filter }],
  mainBrands: () => [...BrandsKeys.lists(), "main"],
  details: () => [...BrandsKeys.all, "detail"],
  detail: (type, value) => [...BrandsKeys.details(), { type, value }],
};

export { BrandsKeys, BrandDetailTypes };
