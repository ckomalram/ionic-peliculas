import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieCredits, MovieDetail, ResponseMDB } from '../interfaces/interfaces';

const URL = environment.url;
const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  getFeature(){
    // eslint-disable-next-line max-len
    /* Getting the current date and then getting the last day of the month. */
    const hoy= new Date();
    const ultimoDia= new Date(hoy.getFullYear(),hoy.getMonth() +1 , 0).getDate();
    const mes = hoy.getMonth() + 1 ;
    let mesString;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.executeQuery<ResponseMDB>(`discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${final}`);
  }

  searchMovie(pelicula: string){
    return this.executeQuery<ResponseMDB>(`search/movie?query=${pelicula}`);
  }

  getByPopularity(){
    this.popularesPage++;
    const query = `discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.executeQuery<ResponseMDB>(query);
  }

  getMovieDetail(id: string){
    return this.executeQuery<MovieDetail>(`movie/${id}?1=1`);
  }

  getMovieCredits(id: string){
    return this.executeQuery<MovieCredits>(`movie/${id}/credits?1=1`);
  }

  private executeQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${APIKEY}&language=es&include_image_language=es`;
    // console.log(query);
    return this.http.get<T>(query);
  }


}
