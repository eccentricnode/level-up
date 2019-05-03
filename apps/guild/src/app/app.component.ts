import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guild';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/guild', icon: 'format_list_bulleted', title: 'Guild Wars 2 Achievements' }
  ]
}
