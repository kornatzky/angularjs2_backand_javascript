import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule }  from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CrudComponent } from './crud/crud.component';
import { FilesComponent } from './files/files.component';
import { BackandService } from '@backand/angular2-sdk';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CrudComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
