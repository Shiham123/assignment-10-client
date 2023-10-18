import { useContext } from 'react';
import { AppContext } from '../context/context';
import { Spinner } from '@material-tailwind/react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, loading } = context;
  const pathLocation = location.pathname;

  if (loading) return <Spinner />;

  if (user) return children;

  return <Navigate state={pathLocation} to="/login"></Navigate>;
};

export default PrivateRoute;
