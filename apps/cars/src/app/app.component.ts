import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/cars', icon: 'format_list_bulleted', title: 'Car Manufacturers' }
  ]
}
