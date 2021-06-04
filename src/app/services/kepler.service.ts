import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../config/constants'

@Injectable({
  providedIn: 'root'
})
export class KeplerService {

  constructor(private httpClient: HttpClient) { }

  public getPlanets() {
    return this.httpClient.get(Constants.API_ENDPOINT + "planets/", { responseType: 'json' });
  }

  public getSuns() {
    return this.httpClient.get(Constants.API_ENDPOINT + "suns/", { responseType: 'json' });
  }

}
