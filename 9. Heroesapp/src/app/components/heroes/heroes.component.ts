import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService) {
    this._heroesService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  ngOnInit() {
  }

  borrarHeroe(key$:string) {
    this._heroesService.borrarHeroe(key$)
      .subscribe(data => {
        if(data) {
          console.error(data);
        } else {
          delete this.heroes[key$];
        }
      });
  }

}
