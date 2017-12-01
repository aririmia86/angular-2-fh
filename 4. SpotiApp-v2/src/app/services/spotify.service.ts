import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getArtistas() {
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDQp9ExJwYFOU8KRw1TDy_Hm0oO_PU5bMUO3eQqs8fhTlbOCR_bR_pcumZ63Z3hihdu06-m0ZN1EDlXU0w'
    });
    return this.http.get(url, { headers }).map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

}
