/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useSession from "./useSession";

function ProtectedRoute({ children }) {
  const { isGuest, isAutoLogin } = useSession();

  if (isAutoLogin) return null; // Optional: show loading state
  if (isGuest) return <Navigate to="/auth/login" replace />;
  return children;
}

export default ProtectedRoute;
