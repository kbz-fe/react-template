import { showNotification } from '@mantine/notifications';
import axios, { AxiosError } from 'axios';
import { startsWith } from 'lodash-es';
import { getAuth, removeAuth } from './auth';

const API_URL = import.meta.env.VITE_API_URL ?? '';

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // if (error?.code === 'ERR_NETWORK') {
      //   showNotification({
      //     color: 'red',
      //     message: 'Network error',
      //   });
      // }

      if (error?.response?.status && error?.response?.status === 401) {
        removeAuth();
      }

      if (
        error?.response?.status &&
        error?.response?.status >= 402 &&
        error?.response?.status <= 499
      ) {
        showNotification({
          color: 'red',
          message: (error?.response?.data as { message: string }).message,
        });
      }

      return Promise.reject();
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    (config: any) => {
      const request = { ...config };
      if (!startsWith(request.url, 'http')) {
        request.url = `${API_URL}${request.url}`;
      }
      const token = getAuth();
      if (token)
        request.headers = {
          ...request.headers,
          Authorization: `Bearer ${token}`,
        };
      return request;
    },
    (error) => Promise.reject(error)
  );
};
