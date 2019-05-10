import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@level/material';
import { CoreDataModule } from '@level/core-data';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistListComponent } from './playlist/playlist-list/playlist-list.component';
import { VideoPlayerComponent } from './playlist/video-player/video-player.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PlaylistComponent, PlaylistListComponent, VideoPlayerComponent, LoginComponent],
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
