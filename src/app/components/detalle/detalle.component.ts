import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: MovieDetail = {} ;

  constructor(private movieservice: MoviesService) { }

  ngOnInit() {
    this.movieservice.getMovieDetail(this.id).subscribe((resp)=> {
      // console.log(resp);
      this.pelicula = resp;
    });

    this.movieservice.getMovieCredits(this.id).subscribe((resp)=> {
      console.log(resp);
    });
    // console.log('ID detalle', this.id);
  }

}
