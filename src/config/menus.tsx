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
        label: 'Orders',
        to: `${DASHBOARD_ROUTE}/stats/orders`,
      },
    ],
  },
];
