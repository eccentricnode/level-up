import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { TacosComponent } from './tacos/tacos.component';
import { LoginComponent } from './login/login.component';
import { TacosListComponent } from './tacos/tacos-list/tacos-list.component';
import { TacoDetailsComponent } from './tacos/taco-details/taco-details.component';

@NgModule({
  declarations: [AppComponent, TacosComponent, LoginComponent, TacosListComponent, TacoDetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
