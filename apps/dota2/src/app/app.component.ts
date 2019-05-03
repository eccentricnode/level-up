import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dota2';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/dota2', icon: 'format_list_bulleted', title: 'Dota2 Teams' }
  ];
}
