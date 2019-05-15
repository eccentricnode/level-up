import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'volumes';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/volumes', icon: 'book', title: 'Books' },
  ]
}
