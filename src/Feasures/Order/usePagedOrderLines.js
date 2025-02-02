import { useQuery } from "@tanstack/react-query";
import { getPagedOrderLines } from "../../Core/Services/ApiOrderLines";
import { ordersKeys } from "./ordersKeys";

function usePagedOrderLines({ page, IsCanceled }) {
  const {
    isLoading,
    error,
    data: orderLines,
  } = useQuery({
    queryKey: ordersKeys.lineList({ page, IsCanceled }),
    queryFn: () => getPagedOrderLines({ page, IsCanceled }),
  });

  return { isLoading, error, orderLines };
}

export default usePagedOrderLines;
