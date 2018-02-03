import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map'; // Map

@Injectable()
export class PeliculasService {

  private apikey = '172c739705f8736ebc0a48dcf00ac8c1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) { }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
    ;
    return this.jsonp.get( url )
      .map( res => res.json());
  }

  buscarPelicula( texto: string ) {
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc
      &api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
    ;
    return this.jsonp.get( url )
      .map( res => res.json());
  }

  getPelicula(id: string) {
    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
    ;
    return this.jsonp.get( url )
      .map( res => res.json());
  }

}
