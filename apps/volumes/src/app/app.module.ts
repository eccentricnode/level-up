import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { VolumesComponent } from './volumes/volumes.component';
import { VolumesListComponent } from './volumes/volumes-list/volumes-list.component';
import { VolumesDetailsComponent } from './volumes/volumes-details/volumes-details.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, VolumesComponent, VolumesListComponent, VolumesDetailsComponent, LoginComponent],
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
