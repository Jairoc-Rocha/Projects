import { Navigate, useLocation } from "react-router";

import useAuth from "../hooks/useAuth";

export default function GuestRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
