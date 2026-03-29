import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesLayoutComponent } from '../../shared/components/layouts/pages-layout/pages-layout.component';

export const PAGES_ROUTES: Routes = [
  {
    path: "",
    component: PagesLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];
