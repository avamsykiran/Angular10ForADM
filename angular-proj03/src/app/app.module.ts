import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuBarComponent,
    AdminHomeComponent,
    StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
