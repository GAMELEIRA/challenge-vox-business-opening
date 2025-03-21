import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'companies',
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./feature/company/company.routes').then((r) => r.routes),
  }
];
