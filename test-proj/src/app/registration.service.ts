import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  _url = 'http://localhost/8080/users';
  constructor(private http: HttpClient) { }

  register(userData)
  {
    return this.http.post<any>(this._url, userData);
  }
}
