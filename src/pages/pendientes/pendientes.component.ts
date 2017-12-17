import { Component, OnInit } from '@angular/core';
import { ListaDeseosService }  from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendienteComponent implements OnInit {
  constructor( private _listaDeseos: ListaDeseosService) {  }

  ngOnInit() {}
}
