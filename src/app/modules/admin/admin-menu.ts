import { MenuItem } from 'primeng/api';

export const ADMIN_MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    routerLink: '/admin/dashboard'
  },
  {
    label: 'Users',
    icon: 'pi pi-users',
    routerLink: '/admin/customers'
  },
  {
    label: 'Categories',
    icon: 'pi pi-list',
    routerLink: '/admin/categories'
  },
  {
    label: 'Services',
    icon: 'pi pi-briefcase',
    routerLink: '/admin/services'
  },
  {
    label: 'Bookings',
    icon: 'pi pi-calendar',
    routerLink: '/admin/bookings'
  },
  {
    label: 'Transactions',
    icon: 'pi pi-credit-card',
    routerLink: '/admin/transactions'
  },
  {
    label: 'Coupons',
    icon: 'pi pi-ticket',
    routerLink: '/admin/coupons'
  },
  {
    label: 'Reviews',
    icon: 'pi pi-star',
    routerLink: '/admin/reviews'
  },
  {
    label: 'CMS',
    icon: 'pi pi-file',
    items: [
      {
        label: 'Banners',
        routerLink: '/admin/banners'
      },
      {
        label: 'Static Pages',
        routerLink: '/admin/pages'
      }
    ]
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: '/admin/settings'
  }
];
