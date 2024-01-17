import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';
import { useUserStore } from '@hooks/_useUser';
import { login } from '@services/authApi';
import { setAuth } from '@utils/_auth';

export function useLogin() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: Record<string, unknown>) => login(data),
    onSuccess: (data) => {
      if (data.data?.data?.TOKEN) {
        setAuth(data.data?.data?.TOKEN);
        setUser(data.data?.data);
        navigate(DASHBOARD_ROUTE);
      } else {
        showNotification({
          color: 'red',
          message: data.data?.message || 'Login fail',
        });
      }
    },
    onError: (error: any) => {
      showNotification({
        color: 'red',
        message: error?.data?.message || 'Login fail',
      });
    },
  });
}
