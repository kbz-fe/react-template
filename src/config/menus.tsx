import { IconHome, IconChartLine } from '@tabler/icons';
import { DASHBOARD_ROUTE } from './const';

export const menus = [
  {
    icon: IconHome,
    label: 'Dashboard',
    to: DASHBOARD_ROUTE,
  },
  {
    icon: IconChartLine,
    label: 'Stats',
    to: `${DASHBOARD_ROUTE}/stats`,
    children: [
      {
        label: 'Products',
        to: `${DASHBOARD_ROUTE}/stats/products`,
      },
      {
        label: 'Order 1',
        to: `${DASHBOARD_ROUTE}/stats/orders/1`,
      },
      {
        label: 'Order 2',
        to: `${DASHBOARD_ROUTE}/stats/orders/2`,
      },
      {
        label: 'Order 3',
        to: `${DASHBOARD_ROUTE}/stats/orders/3`,
      },
      {
        label: 'Order 4',
        to: `${DASHBOARD_ROUTE}/stats/orders/4`,
      },
      {
        label: 'Order 5',
        to: `${DASHBOARD_ROUTE}/stats/orders/5`,
      },
      {
        label: 'Order 6',
        to: `${DASHBOARD_ROUTE}/stats/orders/6`,
      },
      {
        label: 'Order 7',
        to: `${DASHBOARD_ROUTE}/stats/orders/7`,
      },
      {
        label: 'Order 8',
        to: `${DASHBOARD_ROUTE}/stats/orders/8`,
      },
    ],
  },
];
