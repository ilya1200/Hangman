import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../data-structs/imovie';


@Injectable({
  providedIn: 'root'
})
export class HttpService {debugger;
  private getMoviesUrl:string ="assets/movies.json";

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.getMoviesUrl);
  }

  constructor(private http: HttpClient) { }
}
