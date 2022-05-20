import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: MovieDetail[] = [];
  private storage: Storage | null = null;

  constructor(private storageService: Storage, private toastCtrl: ToastController) {
    this.init();
  }

  async init() {
    const storageIns = await this.storageService.create();
    this.storage = storageIns;
  }

  guardarPelicula(pelicula: MovieDetail) {

    let existe = false;
    let mensaje = '';
    /* Checking if the movie is already in the array, if it is, it removes it. */

    this.peliculas.forEach(peli => {
      if (peli.id === pelicula.id) {
        existe = true;
      }
    });


/* Checking if the movie is already in the array, if it is, it removes it. */
    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de Favoritos';
    }else{
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a Favoritos';
    }

    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }
}
