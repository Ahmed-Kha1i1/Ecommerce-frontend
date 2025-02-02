const customerDetailTypes = {
  ID: "id",
};

const customersKeys = {
  all: ["customers"],
  lists: () => [...customersKeys.all, "list"],
  list: (filter) => [...customersKeys.lists(), { filter }],
  details: () => [...customersKeys.all, "detail"],
  detail: (type, value) => [...customersKeys.details(), { type, value }],
};

export { customersKeys, customerDetailTypes };
