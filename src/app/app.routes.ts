import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DetailsComponent } from './components/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':country',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
