import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leagues';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/leagues', icon: 'format_list_bulleted', title: 'Leagues' }
  ];
}
