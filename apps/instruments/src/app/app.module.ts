import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentsListComponent } from './instruments/instruments-list/instruments-list.component';
import { InstrumentsDetailsComponent } from './instruments/instruments-details/instruments-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, InstrumentsComponent, InstrumentsListComponent, InstrumentsDetailsComponent, LoginComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
