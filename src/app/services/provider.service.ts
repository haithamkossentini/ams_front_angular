import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  urlProviders = 'http://localhost:8090/providers/'
  //provider: any;
  basicToken:any = sessionStorage.getItem('basicToken');
  
  /*username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');*/
  constructor(private Http: HttpClient) {}
 /* listProviders() {
    return this.Http.get(this.urlProviders);
  }*/
  listProviders() {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.get(this.urlProviders , { headers });
  }
  deleteProvider(idProvider: any) {
    return this.Http.delete(this.urlProviders + idProvider);
  }
  createProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.post(this.urlProviders, provider, { headers });
  }

  updateProvider(provider: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });
    return this.Http.put(this.urlProviders + provider['id'], provider);
  }
  // deleteProvider(myObj:any) {
  //   return this.Http.delete(this.urlProviders + '/' + myObj['id'], myObj);
  // }
  getProvider(id: any) {
    const headers = new HttpHeaders({ Authorization: this.basicToken });

    return this.Http.get(this.urlProviders + id, { headers });
  }
}
