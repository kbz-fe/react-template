import { Outlet } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { useAppSetup } from '@hooks/useAppSetup';

export function RootLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;
  return <Outlet />;
}
