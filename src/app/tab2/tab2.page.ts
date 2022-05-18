import { Component, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Sonic' , 'Avengers', 'Señor de los anillos', 'La vida es bella'];
  peliculas: Pelicula[] = [];
  loading = false;
  constructor(private movieservice: MoviesService, private modalCtrl: ModalController) {}

  buscarPelicula(event: any){
    this.loading= true;
    // console.log(event);
    const valor = event.detail.value;

    if (valor.length === 0) {
      this.loading=false;
      this.peliculas = [];
      return;
    }
    this.movieservice.searchMovie(valor)
    .subscribe( resp => {
      // console.log(resp);
      this.peliculas = resp.results;
      this.loading= false;
    });

  }

  async verDetalle(id: string){
    const modal = await this.modalCtrl.create(
     {
       component: DetalleComponent,
       componentProps: {
         id
       }
     }
    );

    modal.present();
  }
}
