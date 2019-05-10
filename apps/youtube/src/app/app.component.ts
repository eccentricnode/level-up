import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/playlist', icon: 'playlist_play', title: 'Youtube Playlist' }
  ]
}
