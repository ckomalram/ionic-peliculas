import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, MovieDetail } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: MovieDetail = {} ;
  actores: Cast[] = [];
  ocultar = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private movieservice: MoviesService,
    private modalCtrl: ModalController,
    private datalocal: DatalocalService
    ) { }

    ngOnInit() {
      this.datalocal.existePelicula(this.id).then(existe => {
        this.estrella = existe ? 'star': 'star-outline';
      });
    this.movieservice.getMovieDetail(this.id).subscribe((resp)=> {
      // console.log(resp);
      this.pelicula = resp;
    });

    this.movieservice.getMovieCredits(this.id).subscribe((resp)=> {
      //console.log(resp);
      this.actores = resp.cast;
    });
    // console.log('ID detalle', this.id);
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){
    const existe = this.datalocal.guardarPelicula(this.pelicula);
      this.estrella = existe ? 'star': 'star-outline';
  }

}
