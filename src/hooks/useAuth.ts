import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';
import { getAuth } from '@utils/auth';

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const auth = getAuth();
    // if (!auth) {
    //   navigate('/');
    // }
  }, [navigate, pathname]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const auth = getAuth();
    if (auth) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [navigate, pathname]);
}
