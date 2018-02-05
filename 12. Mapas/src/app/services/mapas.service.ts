import { Injectable } from '@angular/core';
import {Marcador} from '../interfases/marcador';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: 36.722950,
      lng: -4.427825,
      titulo: 'Parroquia de San Pablo',
      draggable: true
    };

    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem(
      'marcadores',
      JSON.stringify(this.marcadores)
    );
  }

  cargarMarcadores() {
    if(localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }

}
