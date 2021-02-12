import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';
import { StudentService } from '../service/student.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:Course[];
  infoMsg:string;
  errMsg:string;
  showActions:boolean;

  constructor(
    private courseService:CourseService,
    private userService:UserService,
    private studentService:StudentService) {
    this.showActions = (userService.isLoggedIn() && userService.currentUser().role=="STUDENT");
   }

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
  
  enroll(cid:number){

    let uid = this.userService.currentUser().userId;

    this.studentService.getById(parseInt(uid)).subscribe(
      (student) =>{
        
        if(!student.enrollments){
          student.enrollments=[];
        }

        student.enrollments.push(
          {
            id:student.enrollments.length+1,
            courseId:cid,
            studentId:student.id,
            dateOfEnrollment:new Date()
          }
        );

        this.studentService.modify(student,student.id).subscribe(
          (student) => {
            this.infoMsg="Youy have enrolled to the selected course";
          },
          (err) => {
            this.errMsg=err;
          }
        );
      },
      (err) => {
        this.errMsg=err;
      }
    );    
  }
}
