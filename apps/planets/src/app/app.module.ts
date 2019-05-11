import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { LoginComponent } from './login/login.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';
import { AppRoutingModule } from './app-routing.modulet';

@NgModule({
  declarations: [AppComponent, PlanetsComponent, LoginComponent, PlanetsListComponent, PlanetsDetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
