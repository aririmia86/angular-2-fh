import { Component, OnInit } from '@angular/core';
import { ListaDeseosService }  from "../../app/services/lista-deseos.service";
import { NavController } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadoComponent implements OnInit {
  constructor(
    private _listaDeseos:ListaDeseosService,
    private navCtrl:NavController
  ) {  }

  ngOnInit() {}

  verDetalle(lista:Lista, indice:number) {
    this.navCtrl.push(DetalleComponent, {
      lista,
      indice
    });
  }
}
