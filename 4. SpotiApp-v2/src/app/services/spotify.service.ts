import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQAKFYbfMjrI4NaXQ1daJ_9EgvqVMIVhZH_qN6a4fjZq4to6clRxiTA4y3r33nRPk5RSD29ebCy0NAbMwUo';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers }).map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getTop(id: string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

}
