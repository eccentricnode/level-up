import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AirComponent } from './air/air.component';
import { AirListComponent } from './air/air-list/air-list.component';
import { AirDetailsComponent } from './air/air-details/air-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, AirComponent, AirListComponent, AirDetailsComponent, LoginComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
