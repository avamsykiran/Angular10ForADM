import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExecSyncOptionsWithStringEncoding } from 'child_process';
import { User } from '../model/user';
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
    let user:User=null;
    let nextPage:string=null;

    if(this.userId.toLowerCase()=="admin"){
      user={userId:this.userId,role:"ADMIN"};
      nextPage="/admin";
    }else{
      user={userId:this.userId,role:"STUDENT"};
      nextPage="/student";
    }

    this.userService.login(user);
    this.router.navigateByUrl(nextPage);
  }

}
