import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuBarComponent,
    AdminHomeComponent,
    StudentHomeComponent,
    MsgBoxComponent,
    AdminDashboardComponent,
    CourseListComponent,
    AddCourseComponent,
    StudentFormComponent,
    StudentDashBoardComponent,
    EnrollmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
