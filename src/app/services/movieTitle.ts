import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export interface MovieTitle {
  Title: string;
  imdbID: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieTitleService {
  private baseUrl: string = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {
  }

  getAllMovieTitlesByName(name: string): Observable<MovieTitle[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:user')
    });
    const params = new HttpParams().set('name', name);
    return this.http.get<MovieTitle[]>(`${this.baseUrl}`, {headers, params});
  }
}
