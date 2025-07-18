import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  tokenKey: string;
  redirectTo: string;
};

export const ProtectedRoute = ({ tokenKey, redirectTo }: Props) => {
  const token = localStorage.getItem(tokenKey);
  return token ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
