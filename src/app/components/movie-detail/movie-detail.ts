import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Movie, MovieService} from '../../services/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./movie-detail.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const imdbID = this.route.snapshot.paramMap.get('id');

    if (imdbID) {
      this.movieService.getMovieDetails(imdbID).subscribe({
        next: (movie) => {
          if (movie && movie.Title) {
            this.movie = movie;
          } else {
            this.errorMessage = 'No se encontró la película.';
          }
        },
        error: () => {
          this.errorMessage = 'No se pudo cargar la película.';
        }
      });
    } else {
      this.errorMessage = 'ID de película no válido.';
    }
  }
}
