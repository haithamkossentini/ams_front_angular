import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
    }
    ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
    }
}
