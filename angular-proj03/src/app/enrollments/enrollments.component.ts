import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../model/enrollment';
import { StudentService } from '../service/student.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {

  enrollments:Enrollment[];

  constructor(
    private studentService:StudentService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    let uid = this.userService.currentUser().userId;

    this.studentService.getById(parseInt(uid)).subscribe(
      (student) =>{
        this.enrollments=student.enrollments;
      }
    );
  }

}
