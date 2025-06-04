import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {MovieTitle} from './movieTitle';

export interface Movie {
  Title: string;
  Released: string;
  Language: string;
  Plot: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'http://localhost:8080/api/movies/id';

  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<Movie> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Movie>(`${this.baseUrl}`, { params });
  }
}
