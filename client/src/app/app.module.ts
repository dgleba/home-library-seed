import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { HomeLibraryRoutingModule  } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
