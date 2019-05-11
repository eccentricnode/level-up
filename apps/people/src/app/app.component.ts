import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'people';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/people', icon: 'format_list_bulleted', title: 'SW Characters' }
  ]
}

