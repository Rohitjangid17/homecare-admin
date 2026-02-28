import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesLayoutComponent } from '../../shared/components/layouts/pages-layout/pages-layout.component';

export const PAGES_ROUTES: Routes = [
  {
    path: "",
    component: PagesLayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];
