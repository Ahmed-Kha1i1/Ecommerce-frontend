/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { addRecentlyViewed } from "../../../Core/GlobalStates/recentlyViewedSlice";

function RecentlyViewedTracker({ productId }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (productId) {
      dispatch(addRecentlyViewed(productId));
      queryClient.invalidateQueries({
        queryKey: ["recentlyViewed"],
        refetchType: "active",
      });
    }
  }, [productId, dispatch, queryClient]);
  return null; // This component doesn't render anything
}

export default RecentlyViewedTracker;
