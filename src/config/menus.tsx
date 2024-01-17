import { IconHome, IconTable } from '@tabler/icons';
import { DASHBOARD_ROUTE } from './const';

// export const _menus = [
//   {
//     icon: IconHome,
//     label: 'Dashboard',
//     to: DASHBOARD_ROUTE,
//   },
//   {
//     icon: IconTable,
//     label: 'Products',
//     to: `${DASHBOARD_ROUTE}/products`,
//   },
// ];

export const menus = [
  {
    icon: IconHome,
    label: 'Dashboard',
    to: DASHBOARD_ROUTE,
  },
  {
    icon: IconTable,
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
