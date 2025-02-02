import { useEffect } from "react";
import useSession from "../../Feasures/Auth/useSession";
import { isAuthenticated } from "../Services/ApiAuth";
import { useDispatch } from "react-redux";
import { setLoading } from "../GlobalStates/authSlice";

function useAutoLogin() {
  const { isGuest, handleSetSession } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    async function autoLogin() {
      dispatch(setLoading(true));
      if (isGuest) {
        try {
          const result = await isAuthenticated();
          if (result && result?.userId) {
            handleSetSession(result.userId);
          }
        } catch {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(false));
      }
    }

    autoLogin();
  }, [isGuest]);
}

export default useAutoLogin;
