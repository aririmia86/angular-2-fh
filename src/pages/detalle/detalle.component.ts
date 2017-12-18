import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Lista } from '../../app/clases/listas';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  indice:number;
  lista:Lista;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams
  ) {
    this.indice = this.navParams.get('indice');
    this.lista = this.navParams.get('lista');
  }

  ngOnInit() {}
}
