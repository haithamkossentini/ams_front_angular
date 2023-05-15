import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  urlProviders = 'http://127.0.0.1:8090/providers/';
  provider: any;
  constructor(private Http: HttpClient) {}
  listProviders() {
    return this.Http.get(this.urlProviders);
  }
  deleteProvider(idProvider: any) {
    return this.Http.delete(this.urlProviders + idProvider);
  }
  createProvider(provider: any) {
    return this.Http.post(this.urlProviders, provider);
  }

  updateProvider(provider: any) {
    return this.Http.put(this.urlProviders + provider['id'], provider);
  }
  // deleteProvider(myObj:any) {
  //   return this.Http.delete(this.urlProviders + '/' + myObj['id'], myObj);
  // }
  getProvider(id: any) {
    return this.Http.get(this.urlProviders + id);
  }
}
