import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  debugger;
  if (sessionStorage.getItem('userRoles') !== role) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;



