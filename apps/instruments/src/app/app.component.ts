import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@level/core-data';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Instruments List';
  authenticated = false;
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/instruments', icon: 'format_list_bulleted', title: 'Instruments List' },
  ];

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  routeToLogin() {
    this.router.navigateByUrl('/login');
    this.authService.setToken();
  }
}
