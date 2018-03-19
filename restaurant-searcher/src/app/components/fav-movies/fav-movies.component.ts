import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service'
@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css'],
  providers:[MovieService]
})
export class FavMoviesComponent implements OnInit {

  constructor(private movieService : MovieService) { }
  public favourites=[];
 
   showFavourites(){
        this.movieService.getFavourites().subscribe((res)=> {
          this.favourites = res
        });
  }

   deleteFavourite(id ){
     
      
      this.movieService.deleteFavourites(this.favourites[id].id).subscribe((res1)=>{
        
        this.showFavourites();
      });
      


 
   }
  ngOnInit() {
  }

}
