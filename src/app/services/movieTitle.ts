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

  private lastSearchTerm = '';
  private lastSearchResults: MovieTitle[] = [];

  constructor(private http: HttpClient) {
  }

  getAllMovieTitlesByName(name: string): Observable<MovieTitle[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:user')
    });
    if(name.includes(' ')) {
      name = name.replace(/ /g, '+');
    }
    const params = new HttpParams().set('name', name);
    return this.http.get<MovieTitle[]>(`${this.baseUrl}`, {headers, params});
  }

  setSearchState(term: string, results: MovieTitle[]) {
    this.lastSearchTerm = term;
    this.lastSearchResults = results;
  }

  getSearchState(): { term: string; results: MovieTitle[] } {
    return { term: this.lastSearchTerm, results: this.lastSearchResults };
  }
}
