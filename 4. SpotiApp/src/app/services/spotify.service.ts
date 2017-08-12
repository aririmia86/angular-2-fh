import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search';

  constructor( private http:Http ) { }

  getArtists(termino:string) {
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAWqqHnCwjzhmJpnXsnvQJ7khovPnTF0r6Cx6FnnkH88t2cxpA3JB7yUj-zV6DUKOB9rt_8FsLoMhj2RguNQg');
    let url = `${this.urlBusqueda}?q=${termino}&type=artist`;
    return this.http.get( url, {headers} ).map(response => {
      console.log(response);
    })
  }

}
