import { Outlet } from 'react-router-dom';
import { useAuthRoute } from '@hooks/useAuth';

export function AuthLayout() {
  useAuthRoute();

  return <Outlet />;
}
