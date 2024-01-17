import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import { DashboardLayout, RootLayout } from '@layouts';
import { LoginPage } from '@pages/auth';
import { DashboardPage } from '@pages/dashboard';
import {
  ProductListPage,
  ProductCreatePage,
  ProductUpdatePage,
  ProductDetailPage,
} from '@pages/products';
import { DASHBOARD_ROUTE } from './const';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: DASHBOARD_ROUTE,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'stats',
            children: [
              {
                path: 'products',
                element: <ProductListPage />,
              },
              {
                path: 'products/create',
                element: <ProductCreatePage />,
              },
              {
                path: 'products/:productId',
                element: <ProductDetailPage />,
              },
              {
                path: 'products/edit/:productId',
                element: <ProductUpdatePage />,
              },
              {
                path: 'orders',
                element: <>Orders</>,
              },
            ],
          },
          {
            path: '*',
            element: <Page404 />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
