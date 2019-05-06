import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'air';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/air', icon: 'format_list_bulleted', title: 'Air Quality' },
  ];
}
