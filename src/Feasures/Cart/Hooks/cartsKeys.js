const cartDetailTypes = {
  ID: "id",
  CUSTOMER_ID: "customerId",
};

const cartsKeys = {
  all: ["carts"],
  lists: () => [...cartsKeys.all, "list"],
  list: (filter) => [...cartsKeys.lists(), { filter }],
  details: () => [...cartsKeys.all, "detail"],
  detail: (type, value) => [...cartsKeys.details(), { type, value }],
  GuestCart: () => [...cartsKeys.all, "GuestCart"],
};

export { cartsKeys, cartDetailTypes };
