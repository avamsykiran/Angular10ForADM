import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course;

  constructor(
    private courseService:CourseService,
    private router:Router 
    ) {
      this.course = {
        id:0,
        title:'',
        durationInHours:0
      };
   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.courseService.add(this.course).subscribe(
      (course) =>{
        this.router.navigate(['/admin/dashboard'],
        {queryParams:{info:"Course Added Successfully with Course#"+course.id}})
      },
      (err) => {
        this.router.navigate(['/admin/dashboard'],
        {queryParams:{err:err}})
      }
    );
  }
}
