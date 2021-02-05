import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task:Task;
  constructor(
    private taskService:TaskService,
    private router:Router) {

    this.task=new Task();
  }

  ngOnInit(): void {
  }

  addTask(){
    this.taskService.addTask(this.task);
    this.router.navigateByUrl("/tasks/list");    
  }

}
