import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminHomeComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard]},
  {path:'student',component:StudentHomeComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
