const ProductDetailTypes = {
  ID: "id",
};

const ProductsKeys = {
  all: ["Products"],
  lists: () => [...ProductsKeys.all, "list"],
  list: (filter) => [...ProductsKeys.lists(), { filter }],
  mainProducts: () => [...ProductsKeys.lists(), "main"],
  details: () => [...ProductsKeys.all, "detail"],
  detail: (type, value) => [...ProductsKeys.details(), { type, value }],
};

export { ProductsKeys, ProductDetailTypes };
