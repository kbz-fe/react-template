import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';
import { useAppSelector } from '@services/index';

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [navigate, pathname, token]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [navigate, pathname, token]);
}
