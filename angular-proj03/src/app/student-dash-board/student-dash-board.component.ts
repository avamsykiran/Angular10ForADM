import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-student-dash-board',
  templateUrl: './student-dash-board.component.html',
  styleUrls: ['./student-dash-board.component.css']
})
export class StudentDashBoardComponent implements OnInit {

  studentName:string;
  constructor(
    private userService:UserService,
    private studentService:StudentService) { }

  ngOnInit(): void {
    let userId = this.userService.currentUser().userId;

    this.studentService.getById(parseInt(userId)).subscribe(
      (student) => {
        this.studentName=student.fullName;
      }
    );
  }

}
