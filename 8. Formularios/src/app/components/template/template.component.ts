import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    condiciones: false
  };

  paises:object[] = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ];

  sexos:string[] = ['Hombre', 'Mujer'];

  constructor() { }

  guardar(forma:NgForm) {

  }

}
