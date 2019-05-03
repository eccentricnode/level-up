import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { CryptoListComponent } from './crypto/crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './crypto/crypto-details/crypto-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, CryptoComponent, CryptoListComponent, CryptoDetailsComponent, LoginComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
