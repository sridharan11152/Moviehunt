import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TMDB } from '../configs/tmdb.config';
import { App } from '../configs/app.config';


@Injectable()
export class MovieService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});


  // Function to get search text and make service call to get movies fromTMDB
  searchMovie(searchedText) {
    return this.http.get(TMDB.search_api+searchedText)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   // Add favourite movie to database
  addMovie(movie) {
    return this.http.post(App.apiUrl+"movies", movie, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  //returning the favourites 
  getFavourites(){
    return this.http.get(App.apiUrl+"movies")
    .map(data => data.json(),
  (error: any)=>this.handleError(error));
  }
  deleteFavourites(id){
    return this.http.delete(App.apiUrl+"movies/"+id);
  }
}
