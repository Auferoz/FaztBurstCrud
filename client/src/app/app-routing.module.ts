import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesFormComponent } from './components/movies-form/movies-form.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },

  {
    path: '',
    redirectTo: '/series',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'series/add',
    component: SeriesFormComponent
  },
  {
    path: 'series/edit/:id',
    component: SeriesFormComponent
  },
  
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/add',
    component: MoviesFormComponent
  },
  {
    path: 'movies/edit/:id',
    component: MoviesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }