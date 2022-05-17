import { Component, OnInit } from '@angular/core';
import { Pelicula, ResponseMDB } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
/* We're injecting the MoviesService into the constructor of the Tab1Page class */
export class Tab1Page implements OnInit {
  peliculaRecientes: Pelicula[]=[];
  peliculasPopulares: Pelicula[]=[];

  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
   this.movieService.getFeature().subscribe(
    (resp) =>  {
      // console.log('respuesta', resp);
      this.peliculaRecientes = resp.results;
      // console.log('pelicula Recientes',  this.peliculaRecientes);
  }
   );

  /* It's calling the getPopulares() method. */
   this.getPopulares();

  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getByPopularity().subscribe(
      resp => {
        const tmpArr = [...this.peliculasPopulares, ...resp.results];
       this.peliculasPopulares= tmpArr;
      }
    );
  }

}
