import ShowOrderLists from "./ShowOrderLists";

function ClosedOrders() {
  return <ShowOrderLists IsCanceled={true} />;
}

export default ClosedOrders;
