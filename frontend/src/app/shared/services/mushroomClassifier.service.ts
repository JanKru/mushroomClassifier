import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MushroomClassifierService {

  constructor(private http: HttpClient) { }

  /** required because of the interceptor  */
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  /**
   * sends an http-post to nodeserver to sign a user in
   * @param authCredentials represents a user with email and passwort
   * @return observable
   */
  postMushroomData(mushroomData) {
    return this.http.post(environment.apiBaseUrl + 'mushroom_classifications/', mushroomData);
  }

  

}


