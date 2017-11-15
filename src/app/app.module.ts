import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { UserCenterComponent } from './user-center/user-center.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCenterComponent,
    UserListComponent,
    UserDetailComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
