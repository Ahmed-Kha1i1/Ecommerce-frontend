/* eslint-disable react/prop-types */
import { Link, useSearchParams } from "react-router-dom";
import { filterKeys } from "../../Core/Hooks/useFilterParams";
import PaginationBar from "../../Core/ui/PaginationBar";
import ProductItemCart from "../Cart/ProductItemCart";
import useCancelLine from "./useCancelLine";
import usePagedOrderLines from "./usePagedOrderLines";
import ItemSkeleton from "../../Core/ui/ItemSkeleton";
import ErrorFallback from "../../Core/ui/ErrorFallback";
import NoResultsFound from "../Products/NoResultsFound";

function ShowOrderLists({ IsCanceled = false }) {
  let [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(filterKeys.PAGE)) || 1;

  const { isLoading, error, orderLines } = usePagedOrderLines({
    page: currentPage,
    IsCanceled,
  });
  // const is = true;
  const { isLoading: isCanceling, cancelLine } = useCancelLine();
  function onRemoveItem(id) {
    cancelLine({ orderLineId: id });
  }

  if (isLoading) return <ItemSkeleton />;

  if (orderLines && orderLines.data.length == 0) {
    return <NoResultsFound />;
  }

  if (error) return <ErrorFallback error={error} />;
  return (
    <>
      <div className="mt-5 flex flex-1 flex-col gap-5">
        {orderLines.data.map((item) => (
          <ProductItemCart
            key={item.id}
            readonly={true}
            productItem={item}
            quantity={item.quantity}
            isLoading={isCanceling}
            remove="Cancel"
            canRemove={!item.isCanceled}
            cancel={item.isCanceled}
            onRemoveItem={() => onRemoveItem(item.id)}
          >
            <Link
              to={`/Account/Orders/detail/${item.orderId}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              Order: {item.orderId}
            </Link>
          </ProductItemCart>
        ))}
      </div>
      <div className="my-4">
        <PaginationBar totalPages={orderLines.totalPages} />
      </div>
    </>
  );
}

export default ShowOrderLists;
