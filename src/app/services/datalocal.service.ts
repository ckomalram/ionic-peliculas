import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: MovieDetail[] = [];
  // private storage: Storage | null = null;

  constructor(private storageService: Storage, private toastCtrl: ToastController) {
    this.init();
    this.cargarFavoritos();
  }

  async init() {
    await this.storageService.create();
    console.log('instancia creada');
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
    this.storageService.set('peliculas', this.peliculas);
    return !existe;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }

  async cargarFavoritos(){
    const favoritos = await this.storageService.get('peliculas');
    console.log(favoritos);
     this.peliculas = favoritos || [];
     console.log(this.peliculas);
  //  .then(resp => this.peliculas = resp);
    return this.peliculas;
  }

  async existePelicula(id){
    // id = Number(id);
    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return (existe)? true: false;
  }
}
