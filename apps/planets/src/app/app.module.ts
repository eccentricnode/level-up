import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { LoginComponent } from './login/login.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';

@NgModule({
  declarations: [AppComponent, PlanetsComponent, LoginComponent, PlanetsListComponent, PlanetsDetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
