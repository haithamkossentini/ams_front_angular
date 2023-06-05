import { RegistrationService } from './../services/registration.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private service: RegistrationService, private router: Router) {}
  // persistUser(data: any) {
  //   console.log(data);
  //   this.service
  //     .createUser(data)
  //     .subscribe((data) => this.router.navigate(['/login']));
  // }
  createUser(myform:any){
    this.service.createUser(myform).subscribe(
      response => {
        console.log(response);
        alert("Inscription avec succes!")
        this.router.navigate(['login']);
      }
    );
  }
}
