import { Injectable } from '@angular/core';
import { Jsonp, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apiKey:string = '172c739705f8736ebc0a48dcf00ac8c1';
  private urlMovieDb:string = 'https://api.themoviedb.org/3';

  constructor(private jsonp:Jsonp, private http:Http) { }

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
