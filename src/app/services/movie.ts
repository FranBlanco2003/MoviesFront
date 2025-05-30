import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  Director: string;
  Poster: string;
  Plot: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) {}

  /*searchMovies(query: string): Observable<Movie[]> {
    const params = new HttpParams().set('name', query);
    return this.http.get<Movie[]>(this.baseUrl, { params });
  }*/

  searchMovies(query: string): Observable<Movie> {
    const params = new HttpParams().set('name', query);
    return this.http.get<Movie>(this.baseUrl, { params });
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }
}
