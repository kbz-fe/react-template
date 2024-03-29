import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import { DashboardLayout } from '@layouts';
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
                children: [
                  {
                    index: true,
                    element: <ProductListPage />,
                  },
                  {
                    path: 'create',
                    element: <ProductCreatePage />,
                  },
                  {
                    path: ':productId',
                    element: <ProductDetailPage />,
                  },
                  {
                    path: 'edit/:productId',
                    element: <ProductUpdatePage />,
                  },
                ],
              },
              {
                path: 'orders/:orderId',
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
