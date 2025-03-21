import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./company.component').then((c) => c.CompanyComponent),
  }, {
    path: 'detail/:id',
    loadComponent: () =>
      import('./pages/company-detail/company-detail.component').then((c) => c.CompanyDetailComponent),
  },

];