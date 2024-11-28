const categoryDetailTypes = {
  ID: "id",
};

const categoriesKeys = {
  all: ["categories"],
  lists: () => [...categoriesKeys.all, "list"],
  list: (filter) => [...categoriesKeys.lists(), { filter }],
  mainCategories: () => [...categoriesKeys.lists(), "main"],
  details: () => [...categoriesKeys.all, "detail"],
  detail: (type, value) => [...categoriesKeys.details(), { type, value }],
};

export { categoriesKeys, categoryDetailTypes };
