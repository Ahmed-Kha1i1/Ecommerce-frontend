import { useDispatch, useSelector } from "react-redux";
import { clearSession, setSession } from "../../Core/GlobalStates/authSlice";

function useSession() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.auth);
  const isGuest = !session.isAuthenticated;
  const isAutoLogin = session.loading;

  function handleSetSession(customerId) {
    dispatch(setSession({ customerId }));
  }

  function handleClearSession() {
    dispatch(clearSession());
  }

  return {
    handleSetSession,
    handleClearSession,
    session,
    isGuest,
    isAutoLogin,
  };
}

export default useSession;
