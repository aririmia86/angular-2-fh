import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map'; // Map

@Injectable()
export class PeliculasService {

  private apikey = '172c739705f8736ebc0a48dcf00ac8c1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp ) { }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
      .map( res => res.json());
  }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
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
