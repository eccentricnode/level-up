import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LoginComponent } from './login/login.component';
import { FruitsListComponent } from './fruits/fruits-list/fruits-list.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, FruitsComponent, LoginComponent, FruitsListComponent, FruitsDetailsComponent],
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
