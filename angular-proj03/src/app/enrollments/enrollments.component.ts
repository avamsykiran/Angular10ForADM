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

  //enrollments:Enrollment[];
  enrollViews: EnrollmentView[];

  constructor(
    private studentService: StudentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let uid = this.userService.currentUser().userId;

    this.studentService.getById(parseInt(uid)).subscribe(
      (student) => {
        this.enrollViews = student.enrollments.map(
          (e) => ({ enrollment: e, isSelected: false })
        );
      }
    );
  }

  toggleSelection(e: EnrollmentView) {
    e.isSelected = !e.isSelected;
  }

  discardSelected() {
    let uid = this.userService.currentUser().userId;

    this.studentService.getById(parseInt(uid)).subscribe(
      (student) => {
        this.enrollViews.forEach(
          ev => {
            if (ev.isSelected) {
              let index = student.enrollments.findIndex(e => e.id == ev.enrollment.id);
              student.enrollments = student.enrollments.splice(index, 1);
            }
          }
        );
        this.studentService.modify(student,student.id).subscribe(
          (data) => {
            this.loadData();
          }
        );
      }
    );
  }
}

class EnrollmentView {
  enrollment: Enrollment;
  isSelected: boolean;
}