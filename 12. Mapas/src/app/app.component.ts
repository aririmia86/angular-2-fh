import { Component } from '@angular/core';
import {MapasService} from './services/mapas.service';
import {Marcador} from './interfases/marcador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 36.722950;
  lng = -4.427825;
  zoom = 16;

  constructor(public _ms: MapasService) { }

  clickMapa(evento) {
    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };
    this._ms.insertarMarcador(nuevoMarcador);
  }
}
