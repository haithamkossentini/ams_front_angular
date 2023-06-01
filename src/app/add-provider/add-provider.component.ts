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
  providerImage: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  selectedFile!: File;

  constructor(private service: ProviderService, private router: Router) {}
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile);
  }
  // persistProvider(data: any) {
  //   console.log(data);
  //   this.service
  //     .createProvider(data)
  //     .subscribe((data) => this.router.navigate(['/listProvider']));
  // }
  persistProvider(data: any) {


    console.log(data);
    const provider = new FormData();
    console.log(data.name)
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', data.name);
    provider.append('email', data.email);
    provider.append('address', data.address);
    console.log(provider);

    this.service.createProvider(provider).subscribe(
      (response) =>{
        console.log(response);
        this.router.navigate(['listProvider']);
      }
    );

  }

}
