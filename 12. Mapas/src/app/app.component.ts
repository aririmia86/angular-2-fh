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

  marcadorSel: any = null;
  draggable = '1';

  constructor(public _ms: MapasService) {
    this._ms.cargarMarcadores();
  }

  clickMapa(evento) {
    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };
    this._ms.insertarMarcador(nuevoMarcador);
  }

  clickMarcador(marcador: Marcador, i: number) {
    this.marcadorSel = marcador;
    if (this.marcadorSel.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }
  }

  dragEndMarcador(marcador: Marcador, evento) {
    const lat = evento.coords.lat;
    const lng = evento.coords.lng;
    marcador.lat = lat;
    marcador.lng = lng;
    this._ms.guardarMarcadores();
  }

  cambiarDraggable() {
    if (this.draggable === '1') {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }

}
