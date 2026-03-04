import { MenuItem } from 'primeng/api';

export const PAGES_MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    routerLink: '/customer/dashboard'
  },
  {
    label: 'Categories',
    icon: 'pi pi-list',
    routerLink: '/customer/categories'
  },
  {
    label: 'My Bookings',
    icon: 'pi pi-calendar',
    routerLink: '/customer/bookings'
  },
  {
    label: 'My Reviews',
    icon: 'pi pi-star',
    routerLink: '/customer/reviews'
  },
  {
    label: 'Support',
    icon: 'pi pi-headphones',
    routerLink: '/customer/support'
  },
  {
    label: 'Profile',
    icon: 'pi pi-user',
    routerLink: '/customer/profile'
  }
];
