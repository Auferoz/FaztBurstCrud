import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Services
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import { MoviesFormComponent } from './components/movies-form/movies-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    SeriesListComponent,
    MoviesListComponent,
    SeriesFormComponent,
    MoviesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
