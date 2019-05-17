import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { LoginComponent } from './login/login.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, LoginComponent, AnimalsListComponent, AnimalDetailsComponent],
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
