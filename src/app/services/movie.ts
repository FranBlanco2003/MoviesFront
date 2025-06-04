import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';

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
  private baseUrl: string = `${environment.apiBaseUrl}/id`;

  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<Movie> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:user')
    });
    const params = new HttpParams().set('id', id);
    return this.http.get<Movie>(`${this.baseUrl}`, { headers, params })
  }
}
