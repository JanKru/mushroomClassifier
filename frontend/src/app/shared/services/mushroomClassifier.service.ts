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


  postMushroomData(mushroomData) {
    return this.http.post(environment.apiBaseUrl + 'mushroom_classifications/', mushroomData);
  }

  getMushroomClassificationHistory() {
    return this.http.get(environment.apiBaseUrl + 'mushroom_classifications/');
  }

}


