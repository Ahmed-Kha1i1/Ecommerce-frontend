const orderDetailTypes = {
  ID: "id",
};

const ordersKeys = {
  all: ["orders"],
  lists: () => [...ordersKeys.all, "list"],
  list: (filter) => [...ordersKeys.lists(), { filter }],
  linesLists: () => [...ordersKeys.all, "Lines", "list"],
  lineList: (filter) => [...ordersKeys.linesLists(), { filter }],
  details: () => [...ordersKeys.all, "detail"],
  detail: (type, value) => [...ordersKeys.details(), { type, value }],
};

export { ordersKeys, orderDetailTypes };
