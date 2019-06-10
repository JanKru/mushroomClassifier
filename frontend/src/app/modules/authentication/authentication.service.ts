import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  /** required because of the interceptor  */
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  /**
   * sends an http-post to nodeserver to sign a user in
   * @param authCredentials represents a user with email and passwort
   * @return observable
   */
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + 'users/authentications/', authCredentials, this.noAuthHeader);
  }

  /**
   * sends an http-post to nodeserver to register a new user 
   * @param authCredentials represents a user with email and passwort
   * @return observable
   */
  register(registrationValues) {
    return this.http.post(environment.apiBaseUrl + 'users/registrations/', registrationValues, this.noAuthHeader);
  }

  /**
   * stores server created token on local storage
   * @param token jwt token created by nodeserver
   */
  storeTokenLocal(token: string) {
    localStorage.setItem('token', token);
  }
  /**
   * removes token from local storage
   */
  deleteTokenLocal() {
    localStorage.removeItem('token');
  }

  /**
   * get the token from local storage
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * get userpayload from jwt token contains id
   */
  getUserPayload() {
    const token = this.getToken();
    if (token) {
      try {
        const userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      } catch (e) {
        return null;
      }
    } else {
      return null;
    }
  }

  /**
   * checks if the user has a stored token in local storage
   */
  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000; // is expiration over or not
    } else {
      return false;
    }
  }

}


