const addressDetailTypes = {
  ID: "id",
};

const addressesKeys = {
  all: ["addresses"],
  lists: () => [...addressesKeys.all, "list"],
  list: (filter) => [...addressesKeys.lists(), { filter }],
  details: () => [...addressesKeys.all, "detail"],
  detail: (type, value) => [...addressesKeys.details(), { type, value }],
  default: () => [...addressesKeys.details(), ["default"]],
};

export { addressesKeys, addressDetailTypes };
