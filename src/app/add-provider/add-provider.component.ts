import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css'],
})
export class AddProviderComponent {
  public titre: string = 'Ajout nouveau Provider';
  imgPlus: string =
    'https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg';
  formation: string = 'Angular';

  constructor(private service: ProviderService, private router: Router) {}
  persistProvider(data: any) {
    this.service
      .createProvider(data)
      .subscribe((data) => this.router.navigate(['/listProvider']));
  }
}
