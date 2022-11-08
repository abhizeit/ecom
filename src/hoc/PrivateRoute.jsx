import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
