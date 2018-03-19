import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movies.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {
	@Input() movie: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  // Add favourite movie to database
  addMovie(movie) {
  	this.movieService.addMovie(movie).subscribe((res) =>{
  		
  	}, (error) =>{

  	})
  }
}
