import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planets';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/planets', icon: 'format_list_bulleted', title: 'Planets List' }
  ]
}
