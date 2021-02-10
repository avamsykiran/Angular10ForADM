import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:Course[];
  errMsg:string;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(
      (courses) => {
        this.courses=courses;
      },
      (err) => {
        this.errMsg=err;
      }
    );
  }
}
