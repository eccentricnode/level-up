import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { RocketDetailsComponent } from './rocket-details/rocket-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, RocketsComponent, RocketListComponent, RocketDetailsComponent, LoginComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
