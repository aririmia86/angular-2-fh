import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = 'https://heroesapp-6621f.firebaseio.com/heroes.json';

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe) {
    let body:string = JSON.stringify(heroe);
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(
      this.heroesURL,
      body,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

}
