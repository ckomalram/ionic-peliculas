import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    // eslint-disable-next-line max-len
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-05-20&api_key=367cb030bd2726cb8c0e78aff655aaea&language=es');
  }
}
