import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[];
  indices:number[];
  termino:string;

  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let resultado = this._heroesService.buscarHeroes(params['termino']);
      this.heroes = resultado.heroesArr;
      this.indices = resultado.heroesIndex;
      this.termino = params['termino'];
    })
  }

  verHeroe(idx:number) {
    this._heroesService.setReturnToSearch(true);
    this.router.navigate(['/heroe', idx]);
  }

}
