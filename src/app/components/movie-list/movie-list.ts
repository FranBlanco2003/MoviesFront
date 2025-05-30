import { Component } from '@angular/core';
import { MovieService, Movie } from '../../services/movie';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  movies: Movie[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private movieService: MovieService, private router: Router) {}

  searchMovies(): void {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';



    this.movieService.searchMovies(this.searchTerm).subscribe({
      next: (data: Movie) => {
        this.movies = [data]; // Wrap the single movie in an array
        this.isLoading = false;
        console.log(this.movies);
      },
      error: (error) => {
        this.errorMessage = 'Error fetching movies. Please try again.';
        console.error('Error fetching movies:', error);
        this.isLoading = false;
      }
    });


  }

  goToDetails(movieId: string): void {
    this.router.navigate(['/movie', movieId]);
  }
}
