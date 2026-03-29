import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "auth", loadChildren: () => import("./modules/auth/auth.routes").then(m => m.AUTH_ROUTES) },
  { path: "admin", loadChildren: () => import("./modules/admin/admin.routes").then(m => m.ADMIN_ROUTES) },
  { path: "pages", loadChildren: () => import("./modules/pages/pages.routes").then(m => m.PAGES_ROUTES) },
  { path: "**", redirectTo: "" }
];
