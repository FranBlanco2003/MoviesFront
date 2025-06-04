import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MovieTitle, MovieTitleService} from '../../services/movieTitle';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.html',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrls: ['./movie-list.css']
})
export class MovieListComponent {
  searchTerm: string = '';
  movies: MovieTitle[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private movieTittle: MovieTitleService, private router: Router) {
  }

  searchMovies(): void {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';


    this.movieTittle.getAllMovieTitlesByName(this.searchTerm).subscribe({
      next: (data: MovieTitle[]) => {
        this.movies = data;
        this.isLoading = false;
      }
      ,
      error: (error) => {
        this.movies = [];
        this.isLoading = false;
        this.errorMessage = 'Error al buscar películas. Por favor, inténtelo de nuevo más tarde.';
        console.error('Error al buscar películas:', error);
      }
    });
  }
}

