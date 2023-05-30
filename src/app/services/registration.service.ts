import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  urlUsers = 'http://localhost:8090/users/';
  

  constructor(private Http: HttpClient) {}
  createUser(user: any) {
    return this.Http.post(this.urlUsers, user);
  }
}
