import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  urlUsers = 'http://localhost:8090/users/';
  user: any;

  constructor(private Http: HttpClient) {}
  // createUser(user: any) {
  //   return this.Http.post(this.urlUsers, user);
  // }
  createUser(myform: any) {
    this.user = {
      name: myform.value.name,
      lastName: myform.value.lname,
      email: myform.value.username,
      password: myform.value.password,
      temp: myform.value.role,
    };
    //return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post('http://localhost:8090/registration', this.user);
  }
}
