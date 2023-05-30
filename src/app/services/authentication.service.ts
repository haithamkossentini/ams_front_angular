import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // constructor() {}
  constructor(private httpClient: HttpClient) {}

  authenticate(username: any, password: any) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.httpClient
      .get('http://localhost:8090/basicauth', { headers })
      .pipe(
        map((userData) => {
          let basicToken = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('basicToken', basicToken);
          console.log(userData);
          return userData;
        })
      );
    //step 2 : charger credentials du backend
    /*  if (username === 'amine' && password === '1234') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }*/
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('basicToken');
  }
}
