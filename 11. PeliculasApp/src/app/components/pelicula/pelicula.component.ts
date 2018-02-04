import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor(public _ps: PeliculasService, public _ar: ActivatedRoute) {
    this._ar.params.subscribe(params => {
      this.regresarA = params.pag;
      if (params.busqueda) {
        this.busqueda = params.busqueda;
      }
      this._ps.getPelicula(params.id).subscribe(data => {
        this.pelicula = data;
      });
    });
  }

  ngOnInit() {
  }

}
