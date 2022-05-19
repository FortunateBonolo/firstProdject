import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Component/signin/signin.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HomepageComponent } from './Component/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignUpComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }