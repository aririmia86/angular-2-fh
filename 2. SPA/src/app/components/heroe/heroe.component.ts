import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  termino:string;
  returnToSearch:boolean;

  constructor(private acivatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

    this.acivatedRoute.params.subscribe(params => {
      // params siempre devuelve variables de tipo strings
      // console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      this.termino = this._heroesService.getTermino();
      // console.log(this.heroe);
      this.returnToSearch = this._heroesService.getReturnToSearch();
    })
  }

}
