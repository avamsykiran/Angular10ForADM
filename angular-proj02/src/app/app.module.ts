import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { InWordsPipe } from './pipe/in-words.pipe';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TaskComponent } from './task/task.component';
import { NumberSeriesContainerComponent } from './number-series-container/number-series-container.component';
import { NumberSeriesComponent } from './number-series/number-series.component';

const routes : Routes = [
  {path:'',redirectTo:'/loan',pathMatch:'full'},
  {path:'loan',component:LoanFormComponent},
  {path:'pipes',component:BuiltInPipesComponent},
  {path:'sddc',component:StructuralDirectivesDemoComponent},
  {path:'tasks',component:TaskManagerComponent,children:[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:TaskListComponent},
    {path:'new',component:AddtaskComponent}
  ]},
  {path:'obdemo',component:NumberSeriesContainerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    BuiltInPipesComponent,
    InWordsPipe,
    MenuBarComponent,
    StructuralDirectivesDemoComponent,
    TaskManagerComponent,
    TaskListComponent,
    AddtaskComponent,
    TaskComponent,
    NumberSeriesContainerComponent,
    NumberSeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
