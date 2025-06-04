import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface MovieTitle {
  Title: string;
  imdbID: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieTitleService {
  private baseUrl: string = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) {}

  getAllMovieTitlesByName(name: string): Observable<MovieTitle[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<MovieTitle[]>(`${this.baseUrl}`, { params });
  }
}
