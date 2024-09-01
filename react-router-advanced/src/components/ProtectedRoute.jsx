import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
