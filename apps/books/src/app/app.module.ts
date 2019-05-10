import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { BooksDetailsComponent } from './books-details/books-details.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, LoginComponent, BooksSearchComponent, BooksDetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
