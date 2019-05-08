import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nfl';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/teams', icon: 'format_list_bulleted', title: 'NFL Teams' },
  ]
}
