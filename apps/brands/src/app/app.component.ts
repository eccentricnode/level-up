import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@level/core-data';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brands List Drag and Drop';
  authenticated = false;
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/scrolls', icon: 'view_list', title: 'Elder Scrolls Drag and Drop' }
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
