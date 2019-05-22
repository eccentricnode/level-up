import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@level/core-data';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Drinks List Drag and Drop';
  authenticated = false;
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/drinks', icon: 'view_list', title: 'Drinks Drag and Drop' }
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
