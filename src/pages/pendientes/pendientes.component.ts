import { Component, OnInit } from '@angular/core';
import { ListaDeseosService }  from "../../app/services/lista-deseos.service";
import { NavController } from 'ionic-angular';
import { AgregarComponent} from '../agregar/agregar.component';
import { Lista } from '../../app/clases/listas';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendienteComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosService,
               private navCtrl: NavController) {  }

  ngOnInit() {}

  irAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(lista:Lista, indice:number) {
    this.navCtrl.push(DetalleComponent, {
      lista,
      indice
    });
  }
}
