import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AppUsersModule } from './app-users/app-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
