import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetail } from '../interfaces/interfaces';
import { DatalocalService } from '../services/datalocal.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: MovieDetail[] = [];
  generos: Genre[] = [];
  favoritoPorGenero = [];

  constructor(private datalocal: DatalocalService, private movieservice: MoviesService) { }
  async ngOnInit() {

  }

/**
 * This function is called when the page is about to enter and become the active page
 */

  async ionViewWillEnter(){
    this.peliculas = await this.datalocal.cargarFavoritos();
    this.generos = await this.movieservice.getGenres();
    this.pelisPorGenero(this.generos, this.peliculas);
  }

  ionViewDidEnter(){
    console.log('did entrer');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  pelisPorGenero(generos: Genre[], peliculas: MovieDetail[]) {
    this.favoritoPorGenero = [];

    generos.forEach(genero => {
      this.favoritoPorGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => peli.genres.find(genre => genre.id === genero.id))
      });
    });

    console.log(this.favoritoPorGenero);
  }
}
