import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'books';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/books', icon: 'library_books', title: 'Google Books Search'}
  ]
}
