import { IconHome, IconTable } from '@tabler/icons';
import { DASHBOARD_ROUTE } from './const';

export const menus = [
  {
    icon: IconHome,
    label: 'Dashboard',
    to: DASHBOARD_ROUTE,
  },
  {
    icon: IconTable,
    label: 'Products',
    to: `${DASHBOARD_ROUTE}/products`,
  },
];
