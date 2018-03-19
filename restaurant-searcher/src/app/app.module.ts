import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RestaurantService} from './restaurant.service';
import { MoviesComponent } from './components/movies/movies.component';
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieComponent } from './components/movies/movie-list/movie/movie.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MovieService} from './services/movies.service';
const routes :Routes = [
  {path: '', redirectTo:'/search',pathMatch:'full'},
  {path: 'search', component:MoviesComponent},
  {path: 'favourite', component:FavMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavMoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }