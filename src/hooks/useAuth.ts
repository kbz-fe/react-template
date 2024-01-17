import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [navigate, pathname, token]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (token) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [navigate, pathname, token]);
}
