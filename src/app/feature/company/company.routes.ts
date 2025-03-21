import { Routes } from '@angular/router';
import { CompanyCreateComponent } from './pages/company-create/company-create.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./company.component').then((c) => c.CompanyComponent),
  }, {
    path: 'detail/:id',
    loadComponent: () =>
      import('./pages/company-detail/company-detail.component').then((c) => c.CompanyDetailComponent),
  }, {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/company-edit/company-edit.component').then((c) => c.CompanyEditComponent),
  }, {
    path: 'create',
    loadComponent: () =>
      import('./pages/company-create/company-create.component').then((c) => c.CompanyCreateComponent),
  },

];