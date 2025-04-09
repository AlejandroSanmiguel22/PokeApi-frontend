import { Routes } from '@angular/router';
import { PokemonPageComponent } from './features/pokemon/pages/pokemon-page/pokemon-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    component: PokemonPageComponent,
  },
  {
    path: '**',
    redirectTo: 'pokemon',
  },
];
