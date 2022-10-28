import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
export const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(state => state.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
