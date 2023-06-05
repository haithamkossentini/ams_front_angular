import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8090/providers/';

  //basicToken:any = sessionStorage.getItem('basicToken');

  constructor(private Http: HttpClient) { }
  listProviders() {
    //const headers = new HttpHeaders({ Authorization: this.basicToken});
   // return this.Http.get(this.urlProviders, {headers});
   return this.Http.get(this.urlProviders);
  }

  deleteProvider(idProvider: any) {
   // const headers = new HttpHeaders({ Authorization: this.basicToken});
   // return this.Http.delete(this.urlProviders + idProvider, {headers})
   return this.Http.delete(this.urlProviders + idProvider)
  }
  updateProvider(provider: any) {
   // const headers = new HttpHeaders({ Authorization: this.basicToken});
   // return this.Http.put(this.urlProviders + provider['id'], provider, {headers});
   return this.Http.put(this.urlProviders + provider['id'], provider);
  }


  createProvider(provider: any) {
   // const headers = new HttpHeaders({ Authorization: this.basicToken});
   //return this.Http.post(this.urlProviders, provider, {headers});
    return this.Http.post(this.urlProviders, provider);
  }


  getProvider(id: any) {
   // const headers = new HttpHeaders({ Authorization: this.basicToken});
   //return this.Http.get(this.urlProviders + id, {headers})
    return this.Http.get(this.urlProviders + id)
  }
}
