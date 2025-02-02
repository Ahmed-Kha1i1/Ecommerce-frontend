const productItemsKeys = {
  all: ["productItems"],
  lists: () => [...productItemsKeys.all, "list"],
  list: (filter) => [...productItemsKeys.lists(), { filter }],
  details: () => [...productItemsKeys.all, "details"],
  detail: (ids) => [...productItemsKeys.details(), { ids }],
};

export { productItemsKeys };
