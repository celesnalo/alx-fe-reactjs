import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = false;

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
