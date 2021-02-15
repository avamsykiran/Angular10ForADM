import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enrollment } from '../model/enrollment';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  id: FormControl;
  fullName: FormControl;
  mobileNumber: FormControl;

  studentForm: FormGroup;

  isEditing: boolean;

  student:Student; //incase of editing..!

  constructor(
    private userService:UserService,
    private studentService: StudentService,
    private router: Router) {

    this.isEditing = false;

    this.id = new FormControl(0, [Validators.required, Validators.min(1)]);
    this.fullName = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.mobileNumber = new FormControl('', [Validators.required, Validators.pattern(/[1-9][0-9]{9}/)]);

    this.studentForm = new FormGroup({
      id: this.id,
      fullName: this.fullName,
      mobileNumber: this.mobileNumber
    });
  }

  ngOnInit(): void {

    let user = this.userService.currentUser();

    if(user){
      this.isEditing=true;
      let uid = parseInt(user.userId);
      this.studentService.getById(uid).subscribe(
        (student) => {
          this.studentForm.setValue(student);
          this.student=student;
        }
      );
    }
  }

  handleSubmit() {
    let student = this.studentForm.value;    

    if(this.isEditing){
      student.enrollments = this.student.enrollments;
      this.modify(student);
    }else{
      this.add(student);
    }
  }

  add(student:Student){
    this.studentService.add(student).subscribe(
      (student) => {
        this.router.navigate(["/login"], { queryParams: { info: `Student#${student.id} registered successfully` } });
      },
      (err) => {
        this.router.navigate(["/login"], { queryParams: { err: err } });
      }
    );
  }

  modify(student:Student){
   this.studentService.modify(student,student.id).subscribe(
      (student) => {
        this.router.navigate(["/student/dashboard"], { queryParams: { info: `Profile update successfully` } });
      },
      (err) => {
        this.router.navigate(["/student/dashboard"], { queryParams: { err: err } });
      }
    );
  }
}
