import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, DrinksComponent, DrinksListComponent, DrinkDetailsComponent],
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
