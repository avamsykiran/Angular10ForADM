import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  taskDetails:Task;

  constructor() { }

  ngOnInit(): void {
  }

}
