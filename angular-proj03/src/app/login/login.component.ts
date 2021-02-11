import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { StudentService } from '../service/student.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;
  infoMsg:string;
  errMsg:string;

  constructor(
    private userService:UserService,
    private studentService:StudentService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (qryPrms) =>{
        if(qryPrms.err){
          this.errMsg=qryPrms.err;
        }
        if(qryPrms.info){
          this.infoMsg=qryPrms.info;
        }
      }
    );
  }

  handleSubmit(){
    let uid = this.userId.toLowerCase();

    if(uid=="admin"){          
      this.userService.login({userId:this.userId,role:"ADMIN"});
      this.router.navigateByUrl("/admin");
    }else{
      this.studentService.getById(parseInt(uid)).subscribe(
        (student) => {
          this.userService.login({userId:uid,role:"STUDENT"});
          this.router.navigateByUrl("/student");
        },
        (err) =>{
          this.errMsg=err;
        }
      );
    }
  }

}
